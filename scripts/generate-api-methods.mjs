import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'patch']

const API_CONFIGS = [
	{
		name: 'market',
		specPath: join(rootDir, 'bak/market.json'),
		outputDir: join(rootDir, 'src/market'),
		clientAccessor: 'market',
		typeImportPath: '../../core/generated/market.types.js',
		groupAliases: {
			Manging: 'Managing',
		},
	},
	{
		name: 'forum',
		specPath: join(rootDir, 'bak/forum.json'),
		outputDir: join(rootDir, 'src/forum'),
		clientAccessor: 'forum',
		typeImportPath: '../../core/generated/forum.types.js',
		groupAliases: {},
	},
]

const toPascalCase = value =>
	value
		.split(/[^a-zA-Z0-9]+/g)
		.filter(Boolean)
		.map(part => part[0].toUpperCase() + part.slice(1))
		.join('')

const toCamelCase = value => {
	const pascal = toPascalCase(value)
	return pascal ? decapitalizeSmart(pascal) : 'method'
}

const toKebabCase = value =>
	value
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.toLowerCase()
		.replace(/^-+|-+$/g, '')

const escapeTsString = value =>
	value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

const isUpperCaseChar = char => char >= 'A' && char <= 'Z'

const decapitalizeSmart = value => {
	if (!value) {
		return value
	}

	let upperPrefixLength = 0
	while (
		upperPrefixLength < value.length &&
		isUpperCaseChar(value[upperPrefixLength])
	) {
		upperPrefixLength += 1
	}

	if (upperPrefixLength <= 1) {
		return value[0].toLowerCase() + value.slice(1)
	}

	if (upperPrefixLength === value.length) {
		return value.toLowerCase()
	}

	if (upperPrefixLength === 2) {
		return value.slice(0, 2).toLowerCase() + value.slice(2)
	}

	return (
		value.slice(0, upperPrefixLength - 1).toLowerCase() +
		value.slice(upperPrefixLength - 1)
	)
}

const ensureDir = dir => mkdirSync(dir, { recursive: true })

const clearTsFiles = dir => {
	ensureDir(dir)
	for (const name of readdirSync(dir)) {
		if (name.endsWith('.ts')) {
			rmSync(join(dir, name))
		}
	}
}

const parseRefName = ref => {
	const parts = ref.split('/')
	return parts[parts.length - 1]
}

const resolveParameter = (parameter, spec) => {
	if (!parameter) {
		return undefined
	}
	if (parameter.$ref) {
		const name = parseRefName(parameter.$ref)
		return spec.components?.parameters?.[name]
	}
	return parameter
}

const collectResolvedParameters = (pathItem, operation, spec) =>
	[...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]
		.map(parameter => resolveParameter(parameter, spec))
		.filter(Boolean)

const resolveRequestBody = (requestBody, spec) => {
	if (!requestBody) {
		return undefined
	}
	if (requestBody.$ref) {
		const name = parseRefName(requestBody.$ref)
		return spec.components?.requestBodies?.[name]
	}
	return requestBody
}

const createFallbackOperationId = ({ method, path }) => {
	const normalizedPath = path
		.replace(/\{([^}]+)\}/g, (_, name) => `By-${name}`)
		.replace(/^\//, '')
		.replace(/\//g, '-')
	const body = normalizedPath ? `-${normalizedPath}` : ''
	return `Misc.${method.toUpperCase()}${body}`
}

const normalizeGroupName = (groupName, groupAliases) => {
	const resolved = groupAliases[groupName] ?? groupName
	return toPascalCase(resolved || 'Misc') || 'Misc'
}

const createOperationMeta = ({ spec, groupAliases }) => {
	const operations = []
	const paths = Object.entries(spec.paths ?? {}).sort(([a], [b]) =>
		a.localeCompare(b),
	)

	for (const [path, pathItem] of paths) {
		for (const method of HTTP_METHODS) {
			const operation = pathItem?.[method]
			if (!operation) {
				continue
			}

			const operationId =
				operation.operationId || createFallbackOperationId({ method, path })
			const [rawGroup, ...rest] = operationId.split('.')
			const rawMethodName = rest.length > 0 ? rest.join('.') : operationId
			const groupName = normalizeGroupName(rawGroup, groupAliases)
			const methodNameSource = rawMethodName
				.replace(/[.[\]()]/g, ' ')
				.replace(/[^a-zA-Z0-9]+/g, ' ')
				.trim()
			const methodName = toCamelCase(methodNameSource || `${method} ${path}`)
			const resolvedParameters = collectResolvedParameters(
				pathItem,
				operation,
				spec,
			)
			const hasPath = resolvedParameters.some(
				parameter => parameter.in === 'path',
			)
			const hasQuery = resolvedParameters.some(
				parameter => parameter.in === 'query',
			)
			const queryRequired = resolvedParameters.some(
				parameter =>
					parameter.in === 'query' && parameter.required === true,
			)
			const resolvedBody = resolveRequestBody(operation.requestBody, spec)
			const hasBody = resolvedBody !== undefined
			const bodyRequired = resolvedBody?.required === true

			operations.push({
				groupName,
				methodName,
				operationId,
				path,
				httpMethod: method.toUpperCase(),
				hasPath,
				hasQuery,
				queryRequired,
				hasBody,
				bodyRequired,
			})
		}
	}

	return operations
}

const buildMethodSignature = operation => {
	const opRef = `OpPath<'${escapeTsString(operation.operationId)}'>`
	const queryRef = `OpQuery<'${escapeTsString(operation.operationId)}'>`
	const bodyRef = `OpBody<'${escapeTsString(operation.operationId)}'>`
	const queryParam = operation.queryRequired
		? `query: ${queryRef}`
		: `query?: ${queryRef}`
	const bodyParam = operation.bodyRequired
		? `body: ${bodyRef}`
		: `body?: ${bodyRef}`

	if (operation.hasPath && operation.hasQuery && operation.hasBody) {
		const optionsOptional =
			operation.queryRequired || operation.bodyRequired ? '' : '?'
		return {
			parameters: [
				`path: ${opRef}`,
				`options${optionsOptional}: { ${queryParam}; ${bodyParam} }`,
			],
			uses: ['OpPath', 'OpQuery', 'OpBody'],
		}
	}
	if (operation.hasPath && operation.hasQuery) {
		return {
			parameters: [`path: ${opRef}`, queryParam],
			uses: ['OpPath', 'OpQuery'],
		}
	}
	if (operation.hasPath && operation.hasBody) {
		return {
			parameters: [`path: ${opRef}`, bodyParam],
			uses: ['OpPath', 'OpBody'],
		}
	}
	if (operation.hasPath) {
		return {
			parameters: [`path: ${opRef}`],
			uses: ['OpPath'],
		}
	}
	if (operation.hasQuery && operation.hasBody) {
		const optionsOptional =
			operation.queryRequired || operation.bodyRequired ? '' : '?'
		return {
			parameters: [
				`options${optionsOptional}: { ${queryParam}; ${bodyParam} }`,
			],
			uses: ['OpQuery', 'OpBody'],
		}
	}
	if (operation.hasQuery) {
		return {
			parameters: [queryParam],
			uses: ['OpQuery'],
		}
	}
	if (operation.hasBody) {
		return {
			parameters: [bodyParam],
			uses: ['OpBody'],
		}
	}
	return { parameters: [], uses: [] }
}

const buildCallArgs = operation => {
	const pathLiteral = `'${escapeTsString(operation.path)}'`

	const withPath = operation.hasPath
	const withQuery = operation.hasQuery
	const withBody = operation.hasBody

	if (!withPath && !withQuery && !withBody) {
		return `${pathLiteral}`
	}

	if (withPath && withQuery && withBody) {
		if (operation.queryRequired && operation.bodyRequired) {
			return `${pathLiteral}, { params: { path, query: options.query }, body: options.body }`
		}
		if (operation.queryRequired) {
			return `${pathLiteral}, {\n\t\t\t\tparams: { path, query: options.query },\n\t\t\t\t...(options.body === undefined ? {} : { body: options.body }),\n\t\t\t}`
		}
		if (operation.bodyRequired) {
			return `${pathLiteral}, {\n\t\t\t\tparams: {\n\t\t\t\t\tpath,\n\t\t\t\t\t...(options.query === undefined ? {} : { query: options.query }),\n\t\t\t\t},\n\t\t\t\tbody: options.body,\n\t\t\t}`
		}
		return `${pathLiteral}, {\n\t\t\t\tparams: {\n\t\t\t\t\tpath,\n\t\t\t\t\t...(options?.query === undefined ? {} : { query: options.query }),\n\t\t\t\t},\n\t\t\t\t...(options?.body === undefined ? {} : { body: options.body }),\n\t\t\t}`
	}
	if (withPath && withQuery) {
		if (operation.queryRequired) {
			return `${pathLiteral}, { params: { path, query } }`
		}
		return `${pathLiteral}, query === undefined\n\t\t\t\t? { params: { path } }\n\t\t\t\t: { params: { path, query } }`
	}
	if (withPath && withBody) {
		if (operation.bodyRequired) {
			return `${pathLiteral}, { params: { path }, body }`
		}
		return `${pathLiteral}, body === undefined\n\t\t\t\t? { params: { path } }\n\t\t\t\t: { params: { path }, body }`
	}
	if (withPath) {
		return `${pathLiteral}, { params: { path } }`
	}
	if (withQuery && withBody) {
		if (operation.queryRequired && operation.bodyRequired) {
			return `${pathLiteral}, { params: { query: options.query }, body: options.body }`
		}
		if (operation.queryRequired) {
			return `${pathLiteral}, {\n\t\t\t\tparams: { query: options.query },\n\t\t\t\t...(options.body === undefined ? {} : { body: options.body }),\n\t\t\t}`
		}
		if (operation.bodyRequired) {
			return `${pathLiteral}, {\n\t\t\t\t...(options.query === undefined ? {} : { params: { query: options.query } }),\n\t\t\t\tbody: options.body,\n\t\t\t}`
		}
		return `${pathLiteral}, {\n\t\t\t\t...(options?.query === undefined ? {} : { params: { query: options.query } }),\n\t\t\t\t...(options?.body === undefined ? {} : { body: options.body }),\n\t\t\t}`
	}
	if (withQuery) {
		if (operation.queryRequired) {
			return `${pathLiteral}, { params: { query } }`
		}
		return `${pathLiteral}, query === undefined ? {} : { params: { query } }`
	}
	if (operation.bodyRequired) {
		return `${pathLiteral}, { body }`
	}
	return `${pathLiteral}, body === undefined ? {} : { body }`
}

const renderModuleFile = ({ moduleName, operations, clientAccessor }) => {
	const deduped = []
	const nameCounter = new Map()

	for (const operation of operations) {
		const seen = nameCounter.get(operation.methodName) ?? 0
		const methodName =
			seen === 0
				? operation.methodName
				: `${operation.methodName}${seen + 1}`
		nameCounter.set(operation.methodName, seen + 1)
		deduped.push({ ...operation, methodName })
	}

	const usedTypes = new Set()
	const methods = deduped
		.sort(
			(a, b) =>
				a.path.localeCompare(b.path) ||
				a.httpMethod.localeCompare(b.httpMethod),
		)
		.map(operation => {
			const signature = buildMethodSignature(operation)
			for (const typeName of signature.uses) {
				usedTypes.add(typeName)
			}
			const params = signature.parameters.join(', ')
			const callArgs = buildCallArgs(operation)

			return `\tasync ${operation.methodName}(${params}) {\n\t\treturn this.http.withRateLimit(() => {\n\t\t\treturn this.http.${clientAccessor}.${operation.httpMethod}(${callArgs})\n\t\t})\n\t}`
		})
		.join('\n\n')

	const importTypes = [...usedTypes].sort()
	const typeImport = importTypes.length
		? `import type { ${importTypes.join(', ')} } from '../common/types.js'\n`
		: ''

	return `import type { HTTPClient } from '../../core/index.js'\n${typeImport}\nexport class ${moduleName}Module {\n\tconstructor(private http: HTTPClient) {}\n\n${methods}\n}\n`
}

const renderApiFile = ({ apiClassName, modules, clientAccessor }) => {
	const moduleImports = modules
		.map(
			moduleInfo =>
				`import { ${moduleInfo.moduleName}Module } from './modules/${moduleInfo.fileName}.js'`,
		)
		.join('\n')

	const props = modules
		.map(
			moduleInfo =>
				`\treadonly ${moduleInfo.propertyName}: ${moduleInfo.moduleName}Module`,
		)
		.join('\n')

	const inits = modules
		.map(
			moduleInfo =>
				`\t\tthis.${moduleInfo.propertyName} = new ${moduleInfo.moduleName}Module(http)`,
		)
		.join('\n')

	return `import type { HTTPClient } from '../core/index.js'\n${moduleImports}\n\nexport class ${apiClassName} {\n${props}\n\n\tconstructor(private http: HTTPClient) {\n${inits}\n\t}\n\n\tget raw() {\n\t\treturn this.http.${clientAccessor}\n\t}\n}\n`
}

const renderCommonTypesFile = typeImportPath =>
	`import type { operations } from '${typeImportPath}'\n\nexport type ContentValue<C> = C extends Record<string, infer V> ? V : never\n\nexport type OpQuery<K extends keyof operations> = operations[K] extends {\n\tparameters: { query?: infer Q }\n}\n\t? Exclude<Q, undefined | never>\n\t: never\n\nexport type OpPath<K extends keyof operations> = operations[K] extends {\n\tparameters: { path: infer P }\n}\n\t? Exclude<P, undefined | never>\n\t: never\n\nexport type OpBody<K extends keyof operations> = operations[K] extends {\n\trequestBody?: infer RB\n}\n\t? RB extends { content: infer C }\n\t\t? ContentValue<C>\n\t\t: never\n\t: never\n`

const generateApi = config => {
	const spec = JSON.parse(readFileSync(config.specPath, 'utf8'))
	const operations = createOperationMeta({
		spec,
		groupAliases: config.groupAliases,
	})

	const grouped = new Map()
	for (const operation of operations) {
		const groupOps = grouped.get(operation.groupName) ?? []
		groupOps.push(operation)
		grouped.set(operation.groupName, groupOps)
	}

	const modulesDir = join(config.outputDir, 'modules')
	clearTsFiles(modulesDir)

	const modules = [...grouped.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([groupName, moduleOperations]) => {
			const moduleName = toPascalCase(groupName)
			const propertyName = decapitalizeSmart(moduleName)
			const fileName = toKebabCase(moduleName)
			const content = renderModuleFile({
				moduleName,
				operations: moduleOperations,
				clientAccessor: config.clientAccessor,
			})

			writeFileSync(join(modulesDir, `${fileName}.ts`), content)
			return { moduleName, propertyName, fileName }
		})

	const apiClassName = `${toPascalCase(config.name)}API`
	const apiFile = renderApiFile({
		apiClassName,
		modules,
		clientAccessor: config.clientAccessor,
	})
	writeFileSync(join(config.outputDir, `${config.name}.ts`), apiFile)

	const commonDir = join(config.outputDir, 'common')
	ensureDir(commonDir)
	const commonTypesPath = join(commonDir, 'types.ts')
	if (config.name === 'forum') {
		writeFileSync(
			commonTypesPath,
			renderCommonTypesFile(config.typeImportPath),
		)
	}
}

for (const config of API_CONFIGS) {
	generateApi(config)
}

console.log('Generated API modules for market and forum.')

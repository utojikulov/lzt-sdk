import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const rootDir = resolve(__dirname, '..')

const SPECS = [
	{
		input: join(rootDir, 'bak/market.json'),
		output: join(rootDir, 'src/core/generated/market.types.ts'),
	},
	{
		input: join(rootDir, 'bak/forum.json'),
		output: join(rootDir, 'src/core/generated/forum.types.ts'),
	},
]

const PARAM_SCHEMA_REF = /^#\/components\/parameters\/([^/]+)\/schema$/

const deepClone = value => JSON.parse(JSON.stringify(value))

const fixParameterSchemaRefs = spec => {
	const visit = node => {
		if (Array.isArray(node)) {
			for (const item of node) {
				visit(item)
			}
			return
		}

		if (!node || typeof node !== 'object') {
			return
		}

		if (typeof node.$ref === 'string') {
			const match = PARAM_SCHEMA_REF.exec(node.$ref)
			if (match) {
				const parameterName = match[1]
				const schema = spec.components?.parameters?.[parameterName]?.schema
				if (schema && typeof schema === 'object') {
					delete node.$ref
					Object.assign(node, deepClone(schema))
				}
			}
		}

		for (const value of Object.values(node)) {
			visit(value)
		}
	}

	visit(spec)
	return spec
}

const run = () => {
	const tempDir = mkdtempSync(join(tmpdir(), 'lzt-openapi-'))
	try {
		for (const { input, output } of SPECS) {
			const raw = JSON.parse(readFileSync(input, 'utf8'))
			const fixed = fixParameterSchemaRefs(raw)
			const tempInput = join(
				tempDir,
				input.endsWith('market.json')
					? 'market.fixed.json'
					: 'forum.fixed.json',
			)
			writeFileSync(tempInput, JSON.stringify(fixed))

			const result = spawnSync(
				'./node_modules/.bin/openapi-typescript',
				[tempInput, '-o', output],
				{
					cwd: rootDir,
					stdio: 'inherit',
					shell: false,
				},
			)
			if (result.status !== 0) {
				process.exit(result.status ?? 1)
			}
		}
	} finally {
		rmSync(tempDir, { recursive: true, force: true })
	}
}

run()

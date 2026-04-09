import type {
	components,
	operations,
	paths as MarketPaths,
} from '../../generated/market.types.js'
import type { CATEGORY_PATH } from './registry.js'

export type CategorySlug = keyof typeof CATEGORY_PATH
export type CategoryPath<S extends CategorySlug> = (typeof CATEGORY_PATH)[S]
export type CategoryName = components['parameters']['categoryName']

export type QueryByPath<P extends keyof MarketPaths> = MarketPaths[P] extends {
	get: { parameters: { query?: infer Q } }
}
	? Exclude<Q, undefined | never>
	: never

export type PathByPath<P extends keyof MarketPaths> = MarketPaths[P] extends {
	get: { parameters: { path: infer PP } }
}
	? Exclude<PP, undefined | never>
	: never

export type BaseCategoryQuery = QueryByPath<'/'>
export type CategoryQuery<S extends CategorySlug> = QueryByPath<CategoryPath<S>>

export type ContentValue<C> = C extends Record<string, infer V> ? V : never

export type OpQuery<K extends keyof operations> = operations[K] extends {
	parameters: { query?: infer Q }
}
	? Exclude<Q, undefined | never>
	: never

export type OpPath<K extends keyof operations> = operations[K] extends {
	parameters: { path: infer P }
}
	? Exclude<P, undefined | never>
	: never

export type OpBody<K extends keyof operations> = operations[K] extends {
	requestBody?: infer RB
}
	? RB extends { content: infer C }
		? ContentValue<C>
		: never
	: never

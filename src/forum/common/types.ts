import type { operations } from '../../core/generated/forum.types.js'

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

import type { HTTPClient } from '../../core/index.js'
import type { OpPath, OpQuery } from '../common/types.js'

export class CategoriesModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Categories.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/categories', query === undefined ? {} : { params: { query } })
		})
	}

	async get(path: OpPath<'Categories.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/categories/{category_id}', { params: { path } })
		})
	}
}

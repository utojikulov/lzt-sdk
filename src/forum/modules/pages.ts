import type { HTTPClient } from '../../core/index.js'
import type { OpPath, OpQuery } from '../common/types.js'

export class PagesModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Pages.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/pages', query === undefined ? {} : { params: { query } })
		})
	}

	async get(path: OpPath<'Pages.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/pages/{page_id}', { params: { path } })
		})
	}
}

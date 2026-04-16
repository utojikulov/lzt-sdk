import type { HTTPClient } from '../../core/index.js'
import type { OpPath, OpQuery } from '../common/types.js'

export class TagsModule {
	constructor(private http: HTTPClient) {}

	async popular() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/tags')
		})
	}

	async get(path: OpPath<'Tags.Get'>, query?: OpQuery<'Tags.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/tags/{tag_id}', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async find(query: OpQuery<'Tags.Find'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/tags/find', { params: { query } })
		})
	}

	async list(query?: OpQuery<'Tags.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/tags/list', query === undefined ? {} : { params: { query } })
		})
	}
}

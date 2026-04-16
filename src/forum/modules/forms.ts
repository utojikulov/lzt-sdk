import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/types.js'

export class FormsModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Forms.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forms', query === undefined ? {} : { params: { query } })
		})
	}

	async create(body?: OpBody<'Forms.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/forms/save', body === undefined ? {} : { body })
		})
	}
}

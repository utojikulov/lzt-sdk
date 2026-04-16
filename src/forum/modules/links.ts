import type { HTTPClient } from '../../core/index.js'
import type { OpPath } from '../common/types.js'

export class LinksModule {
	constructor(private http: HTTPClient) {}

	async list() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/link-forums')
		})
	}

	async get(path: OpPath<'Links.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/link-forums/{link_id}', { params: { path } })
		})
	}
}

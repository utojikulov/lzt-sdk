import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/types.js'

export class ProfileModule {
	constructor(private http: HTTPClient) {}

	async claims(query?: OpQuery<'Profile.Claims'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/claims', query === undefined ? {} : { params: { query } })
		})
	}

	async get(query?: OpQuery<'Profile.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/me', query === undefined ? {} : { params: { query } })
		})
	}

	async edit(body?: OpBody<'Profile.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.PUT('/me', body === undefined ? {} : { body })
		})
	}
}

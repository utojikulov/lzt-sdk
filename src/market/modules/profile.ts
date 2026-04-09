import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/index.js'

export class ProfileModule {
	constructor(private http: HTTPClient) {}

	async getProfile(query?: OpQuery<'Profile.Get'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/me',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async editMarketSettings(body?: OpBody<'Profile.Edit'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.PUT(
				'/me',
				body === undefined ? {} : { body },
			)
		})
	}

	async getClaims(query?: OpQuery<'Profile.Claims'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/claims',
				query === undefined ? {} : { params: { query } },
			)
		})
	}
}

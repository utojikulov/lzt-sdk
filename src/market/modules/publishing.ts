import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath } from '../common/index.js'

export class PublishingModule {
	constructor(private http: HTTPClient) {}

	async fastAccountUpload(body?: OpBody<'Publishing.FastSell'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/item/fast-sell',
				body === undefined ? {} : { body },
			)
		})
	}

	async addAccount(body?: OpBody<'Publishing.Add'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/item/add',
				body === undefined ? {} : { body },
			)
		})
	}

	async checkAccountDetails(
		item_id: OpPath<'Publishing.Check'>['item_id'],
		body?: OpBody<'Publishing.Check'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/goods/check',
				body === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id } }, body },
			)
		})
	}

	async addExternalAccount(
		item_id: OpPath<'Publishing.External'>['item_id'],
		body?: OpBody<'Publishing.External'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/external-account',
				body === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id } }, body },
			)
		})
	}
}

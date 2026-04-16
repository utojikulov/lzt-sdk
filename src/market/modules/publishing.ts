import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath } from '../common/types.js'

export class PublishingModule {
	constructor(private http: HTTPClient) {}

	async external(path: OpPath<'Publishing.External'>, body?: OpBody<'Publishing.External'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/external-account', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async check(path: OpPath<'Publishing.Check'>, body?: OpBody<'Publishing.Check'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/goods/check', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async add(body?: OpBody<'Publishing.Add'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/item/add', body === undefined ? {} : { body })
		})
	}

	async fastSell(body?: OpBody<'Publishing.FastSell'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/item/fast-sell', body === undefined ? {} : { body })
		})
	}
}

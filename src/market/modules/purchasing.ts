import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath } from '../common/types.js'

export class PurchasingModule {
	constructor(private http: HTTPClient) {}

	async check(path: OpPath<'Purchasing.Check'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/check-account', { params: { path } })
		})
	}

	async confirm(path: OpPath<'Purchasing.Confirm'>, body?: OpBody<'Purchasing.Confirm'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/confirm-buy', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async discountCancel(path: OpPath<'Purchasing.DiscountCancel'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/discount', { params: { path } })
		})
	}

	async discountRequest(path: OpPath<'Purchasing.DiscountRequest'>, body?: OpBody<'Purchasing.DiscountRequest'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/discount', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async fastBuy(path: OpPath<'Purchasing.FastBuy'>, body?: OpBody<'Purchasing.FastBuy'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/fast-buy', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}
}

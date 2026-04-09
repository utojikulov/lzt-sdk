import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath } from '../common/index.js'

export class PurchasingModule {
	constructor(private http: HTTPClient) {}

	async fastBuy(
		item_id: OpPath<'Purchasing.FastBuy'>['item_id'],
		body?: OpBody<'Purchasing.FastBuy'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/fast-buy',
				body === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id } }, body },
			)
		})
	}

	async checkAccount(item_id: OpPath<'Purchasing.Check'>['item_id']) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/check-account', {
				params: { path: { item_id } },
			})
		})
	}

	async confirmBuy(
		item_id: OpPath<'Purchasing.Confirm'>['item_id'],
		body?: OpBody<'Purchasing.Confirm'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/confirm-buy',
				body === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id } }, body },
			)
		})
	}

	async requestDiscount(
		item_id: OpPath<'Purchasing.DiscountRequest'>['item_id'],
		body?: OpBody<'Purchasing.DiscountRequest'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/discount',
				body === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id } }, body },
			)
		})
	}

	async cancelDiscount(
		item_id: OpPath<'Purchasing.DiscountCancel'>['item_id'],
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/discount', {
				params: { path: { item_id } },
			})
		})
	}
}

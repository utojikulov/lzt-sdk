import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/index.js'

export class CartModule {
	constructor(private http: HTTPClient) {}

	async getCart(query?: OpQuery<'Cart.Get'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/cart',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async addToCart(body: OpBody<'Cart.Add'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/cart', { body })
		})
	}

	async removeFromCart(body?: OpBody<'Cart.Delete'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE(
				'/cart',
				body === undefined ? {} : { body },
			)
		})
	}
}

import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/types.js'

export class CartModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'Cart.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/cart', body === undefined ? {} : { body })
		})
	}

	async get(query?: OpQuery<'Cart.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/cart', query === undefined ? {} : { params: { query } })
		})
	}

	async add(body: OpBody<'Cart.Add'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/cart', { body })
		})
	}
}

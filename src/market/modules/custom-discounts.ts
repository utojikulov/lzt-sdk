import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class CustomDiscountsModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'CustomDiscounts.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/custom-discounts', body === undefined ? {} : { body })
		})
	}

	async get() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/custom-discounts')
		})
	}

	async create(body?: OpBody<'CustomDiscounts.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/custom-discounts', body === undefined ? {} : { body })
		})
	}

	async edit(body?: OpBody<'CustomDiscounts.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.PUT('/custom-discounts', body === undefined ? {} : { body })
		})
	}
}

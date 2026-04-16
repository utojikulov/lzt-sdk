import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class AutoPaymentsModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'AutoPayments.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/auto-payment', body === undefined ? {} : { body })
		})
	}

	async create(body?: OpBody<'AutoPayments.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/auto-payment', body === undefined ? {} : { body })
		})
	}

	async list() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/auto-payments')
		})
	}
}

import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class ProxyModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'Proxy.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/proxy', body === undefined ? {} : { body })
		})
	}

	async get() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/proxy')
		})
	}

	async add(body: OpBody<'Proxy.Add'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/proxy', { body })
		})
	}
}

import type { HTTPClient } from '../http/index.js'
import type { paths as MarketPaths } from '../generated/market.types.js'

export class MarketAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	get raw() {
		return this.http.market
	}

	async search(params?: Record<string, unknown>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/', {
				params: { query: params as any },
			})
		})
	}

	// More convenience methods can be added here
	// But users can also use client.market.raw.GET/POST/etc for full access
}

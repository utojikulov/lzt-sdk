import type { HTTPClient } from '../http/index.js'
import type {
	CategoryPath,
	CategoryQuery,
	CategorySlug,
} from './categories/types.js'
import { CATEGORY_PATH } from './categories/registry.js'

export class MarketAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	get raw() {
		return this.http.market
	}

	async searchCategory<S extends CategorySlug>(
		category: S,
		query?: CategoryQuery<S>,
	) {
		return this.http.withRateLimit(async () => {
			const path = CATEGORY_PATH[category] as CategoryPath<S>

			return await this.http.market.GET(
				path as never,
				{
					params: { query },
				} as never,
			)
		})
	}

	// More convenience methods can be added here
	// But users can also use client.market.raw.GET/POST/etc for full access
}

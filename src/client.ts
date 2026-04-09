import { HTTPClient } from './core/index.js'
import { MarketAPI } from './market/index.js'
import { ForumAPI } from './forum/index.js'
import type { LZTConfig } from './types/index.js'

export class LZTClient {
	private http: HTTPClient

	public market: MarketAPI
	public forum: ForumAPI

	constructor(config: LZTConfig) {
		this.http = new HTTPClient({
			baseURL: 'https://api.lzt.market',
			token: config.token,
			locale: config.locale,
			intervalBetweenRequests: config.intervalBetweenRequests ?? 3000,
		})

		this.market = new MarketAPI(this.http)
		this.forum = new ForumAPI(this.http)
	}
}

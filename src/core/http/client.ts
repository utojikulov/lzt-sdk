import createClient from 'openapi-fetch'
import type { paths as MarketPaths } from '../generated/market.types.js'
import type { paths as ForumPaths } from '../generated/forum.types.js'
import type { HTTPClientConfig } from './types.js'

export class HTTPClient {
	private config: HTTPClientConfig
	private marketClient: ReturnType<typeof createClient<MarketPaths>>
	private forumClient: ReturnType<typeof createClient<ForumPaths>>
	private queue: Array<() => Promise<void>> = []
	private isProcessing = false
	private lastRequestTime = 0

	constructor(config: HTTPClientConfig) {
		this.config = config

		this.marketClient = createClient<MarketPaths>({
			baseUrl: 'https://api.lzt.market',
			headers: {
				Authorization: `Bearer ${config.token}`,
				...(config.locale && { 'Accept-Language': config.locale }),
			},
		})

		this.forumClient = createClient<ForumPaths>({
			baseUrl: 'https://api.lolz.live',
			headers: {
				Authorization: `Bearer ${config.token}`,
				...(config.locale && { 'Accept-Language': config.locale }),
			},
		})
	}

	get market() {
		return this.marketClient
	}

	get forum() {
		return this.forumClient
	}

	async withRateLimit<T>(fn: () => Promise<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			this.queue.push(async () => {
				try {
					const result = await fn()
					resolve(result)
				} catch (error) {
					reject(error)
				}
			})

			if (!this.isProcessing) {
				this.processQueue()
			}
		})
	}

	private async processQueue(): Promise<void> {
		if (this.isProcessing || this.queue.length === 0) {
			return
		}

		this.isProcessing = true

		while (this.queue.length > 0) {
			const now = Date.now()
			const timeSinceLastRequest = now - this.lastRequestTime

			if (timeSinceLastRequest < this.config.intervalBetweenRequests) {
				await new Promise(resolve =>
					setTimeout(
						resolve,
						this.config.intervalBetweenRequests - timeSinceLastRequest,
					),
				)
			}

			const task = this.queue.shift()
			if (task) {
				this.lastRequestTime = Date.now()
				await task()
			}
		}

		this.isProcessing = false
	}
}

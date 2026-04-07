import type { HTTPClient } from '../http/index.js'

export class MarketAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	async search(params?: Record<string, unknown>): Promise<unknown> {
		// TODO: Implement in later tasks
		throw new Error('Not implemented yet')
	}

	// More methods will be added in Tasks 8-13
}

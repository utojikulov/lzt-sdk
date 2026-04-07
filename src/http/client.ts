import type { HTTPClientConfig, QueuedRequest } from './types.js'

export class HTTPClient {
	private config: HTTPClientConfig
	private queue: QueuedRequest[] = []
	private isProcessing = false

	constructor(config: HTTPClientConfig) {
		this.config = config
	}

	async request(
		endpoint: string,
		options: RequestInit = {},
	): Promise<Response> {
		// TODO: Implement in next task
		throw new Error('Not implemented yet')
	}

	private async processQueue(): Promise<void> {
		// TODO: Implement in next task
	}
}

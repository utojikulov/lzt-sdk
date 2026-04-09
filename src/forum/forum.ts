import type { HTTPClient } from '../core/index.js'

export class ForumAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	get raw() {
		return this.http.forum
	}

	async getUser(userId: number) {
		return this.http.withRateLimit(async () => {
			return await this.http.forum.GET('/users/{user_id}', {
				params: { path: { user_id: userId } },
			})
		})
	}

	// More convenience methods can be added here
	// But users can also use client.forum.raw.GET/POST/etc for full access
}

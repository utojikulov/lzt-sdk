import type { HTTPClient } from '../http/index.js'

/**
 * Forum API methods
 * Handles all forum operations (users, threads, posts, etc.)
 */
export class ForumAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	/**
	 * Get user profile from forum
	 * @param userId - User ID
	 */
	async getUser(userId: number): Promise<unknown> {
		// TODO: Implement in Task 14
		throw new Error('Not implemented yet')
	}

	// More methods will be added in Task 15
}

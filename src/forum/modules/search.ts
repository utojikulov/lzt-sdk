import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath } from '../common/types.js'

export class SearchModule {
	constructor(private http: HTTPClient) {}

	async all(body?: OpBody<'Search.All'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search', body === undefined ? {} : { body })
		})
	}

	async results(path: OpPath<'Search.Results'>, body?: OpBody<'Search.Results'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/search/{search_id}/results', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async posts(body?: OpBody<'Search.Posts'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search/posts', body === undefined ? {} : { body })
		})
	}

	async profilePosts(body?: OpBody<'Search.ProfilePosts'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search/profile-posts', body === undefined ? {} : { body })
		})
	}

	async tagged(body?: OpBody<'Search.Tagged'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search/tagged', body === undefined ? {} : { body })
		})
	}

	async threads(body?: OpBody<'Search.Threads'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search/threads', body === undefined ? {} : { body })
		})
	}

	async users(body?: OpBody<'Search.Users'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/search/users', body === undefined ? {} : { body })
		})
	}
}

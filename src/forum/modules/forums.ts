import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class ForumsModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Forums.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums', query === undefined ? {} : { params: { query } })
		})
	}

	async get(path: OpPath<'Forums.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums/{forum_id}', { params: { path } })
		})
	}

	async unfollow(path: OpPath<'Forums.Unfollow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/forums/{forum_id}/followers', { params: { path } })
		})
	}

	async followers(path: OpPath<'Forums.Followers'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums/{forum_id}/followers', { params: { path } })
		})
	}

	async follow(path: OpPath<'Forums.Follow'>, body?: OpBody<'Forums.Follow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/forums/{forum_id}/followers', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async getFeedOptions() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums/feed/options')
		})
	}

	async editFeedOptions(body?: OpBody<'Forums.EditFeedOptions'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/forums/feed/options', body === undefined ? {} : { body })
		})
	}

	async followed(query?: OpQuery<'Forums.Followed'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums/followed', query === undefined ? {} : { params: { query } })
		})
	}

	async grouped() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/forums/grouped')
		})
	}
}

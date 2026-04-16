import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class ThreadsModule {
	constructor(private http: HTTPClient) {}

	async claim(body?: OpBody<'Threads.Claim'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/claims', body === undefined ? {} : { body })
		})
	}

	async createContest(body: OpBody<'Threads.CreateContest'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/contests', { body })
		})
	}

	async finish(path: OpPath<'Threads.Finish'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/contests/{thread_id}/finish', { params: { path } })
		})
	}

	async list(query?: OpQuery<'Threads.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads', query === undefined ? {} : { params: { query } })
		})
	}

	async create(body?: OpBody<'Threads.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads', body === undefined ? {} : { body })
		})
	}

	async delete(path: OpPath<'Threads.Delete'>, body?: OpBody<'Threads.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/threads/{thread_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async get(path: OpPath<'Threads.Get'>, query?: OpQuery<'Threads.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/{thread_id}', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async edit(path: OpPath<'Threads.Edit'>, body?: OpBody<'Threads.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/threads/{thread_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async bump(path: OpPath<'Threads.Bump'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/bump', { params: { path } })
		})
	}

	async unfollow(path: OpPath<'Threads.Unfollow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/threads/{thread_id}/followers', { params: { path } })
		})
	}

	async followers(path: OpPath<'Threads.Followers'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/{thread_id}/followers', { params: { path } })
		})
	}

	async follow(path: OpPath<'Threads.Follow'>, body?: OpBody<'Threads.Follow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/followers', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async hide(path: OpPath<'Threads.Hide'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/hide', { params: { path } })
		})
	}

	async move(path: OpPath<'Threads.Move'>, body?: OpBody<'Threads.Move'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/move', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async navigation(path: OpPath<'Threads.Navigation'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/{thread_id}/navigation', { params: { path } })
		})
	}

	async pollGet(path: OpPath<'Threads.Poll.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/{thread_id}/poll', { params: { path } })
		})
	}

	async pollVote(path: OpPath<'Threads.Poll.Vote'>, body?: OpBody<'Threads.Poll.Vote'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/poll/votes', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async unstar(path: OpPath<'Threads.Unstar'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/threads/{thread_id}/star', { params: { path } })
		})
	}

	async star(path: OpPath<'Threads.Star'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/threads/{thread_id}/star', { params: { path } })
		})
	}

	async followed(query?: OpQuery<'Threads.Followed'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/followed', query === undefined ? {} : { params: { query } })
		})
	}

	async unread(query?: OpQuery<'Threads.Unread'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/new', query === undefined ? {} : { params: { query } })
		})
	}

	async recent(query?: OpQuery<'Threads.Recent'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/threads/recent', query === undefined ? {} : { params: { query } })
		})
	}
}

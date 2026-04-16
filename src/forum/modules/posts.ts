import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class PostsModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Posts.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/posts', query === undefined ? {} : { params: { query } })
		})
	}

	async create(body?: OpBody<'Posts.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/posts', body === undefined ? {} : { body })
		})
	}

	async delete(path: OpPath<'Posts.Delete'>, body?: OpBody<'Posts.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/posts/{post_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async get(path: OpPath<'Posts.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/posts/{post_id}', { params: { path } })
		})
	}

	async edit(path: OpPath<'Posts.Edit'>, body?: OpBody<'Posts.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/posts/{post_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async unlike(path: OpPath<'Posts.Unlike'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/posts/{post_id}/likes', { params: { path } })
		})
	}

	async likes(path: OpPath<'Posts.Likes'>, query?: OpQuery<'Posts.Likes'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/posts/{post_id}/likes', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async like(path: OpPath<'Posts.Like'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/posts/{post_id}/likes', { params: { path } })
		})
	}

	async reportReasons(path: OpPath<'Posts.ReportReasons'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/posts/{post_id}/report', { params: { path } })
		})
	}

	async report(path: OpPath<'Posts.Report'>, body?: OpBody<'Posts.Report'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/posts/{post_id}/report', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async commentsDelete(body?: OpBody<'Posts.Comments.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsGet(query: OpQuery<'Posts.Comments.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/posts/comments', { params: { query } })
		})
	}

	async commentsCreate(body?: OpBody<'Posts.Comments.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsEdit(body?: OpBody<'Posts.Comments.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsReport(body?: OpBody<'Posts.Comments.Report'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/posts/comments/report', body === undefined ? {} : { body })
		})
	}
}

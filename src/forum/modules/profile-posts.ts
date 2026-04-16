import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class ProfilePostsModule {
	constructor(private http: HTTPClient) {}

	async create(body?: OpBody<'ProfilePosts.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts', body === undefined ? {} : { body })
		})
	}

	async delete(path: OpPath<'ProfilePosts.Delete'>, query?: OpQuery<'ProfilePosts.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/profile-posts/{profile_post_id}', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async get(path: OpPath<'ProfilePosts.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/profile-posts/{profile_post_id}', { params: { path } })
		})
	}

	async edit(path: OpPath<'ProfilePosts.Edit'>, body?: OpBody<'ProfilePosts.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/profile-posts/{profile_post_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async commentsGet(path: OpPath<'ProfilePosts.Comments.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/profile-posts/{profile_post_id}/comments/{comment_id}', { params: { path } })
		})
	}

	async unlike(path: OpPath<'ProfilePosts.Unlike'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/profile-posts/{profile_post_id}/likes', { params: { path } })
		})
	}

	async likes(path: OpPath<'ProfilePosts.Likes'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/profile-posts/{profile_post_id}/likes', { params: { path } })
		})
	}

	async like(path: OpPath<'ProfilePosts.Like'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts/{profile_post_id}/likes', { params: { path } })
		})
	}

	async reportReasons(path: OpPath<'ProfilePosts.ReportReasons'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/profile-posts/{profile_post_id}/report', { params: { path } })
		})
	}

	async report(path: OpPath<'ProfilePosts.Report'>, body?: OpBody<'ProfilePosts.Report'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts/{profile_post_id}/report', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async unstick(path: OpPath<'ProfilePosts.Unstick'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/profile-posts/{profile_post_id}/stick', { params: { path } })
		})
	}

	async stick(path: OpPath<'ProfilePosts.Stick'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts/{profile_post_id}/stick', { params: { path } })
		})
	}

	async commentsDelete(body?: OpBody<'ProfilePosts.Comments.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/profile-posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsList(query: OpQuery<'ProfilePosts.Comments.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/profile-posts/comments', { params: { query } })
		})
	}

	async commentsCreate(body?: OpBody<'ProfilePosts.Comments.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsEdit(body?: OpBody<'ProfilePosts.Comments.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/profile-posts/comments', body === undefined ? {} : { body })
		})
	}

	async commentsReport(path: OpPath<'ProfilePosts.Comments.Report'>, body?: OpBody<'ProfilePosts.Comments.Report'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/profile-posts/comments/{comment_id}/report', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async list(path: OpPath<'ProfilePosts.List'>, query?: OpQuery<'ProfilePosts.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/profile-posts', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}
}

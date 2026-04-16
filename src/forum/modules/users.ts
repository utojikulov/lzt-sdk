import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class UsersModule {
	constructor(private http: HTTPClient) {}

	async saCancelReset() {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/account/secret-answer/reset')
		})
	}

	async saReset() {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/account/secret-answer/reset')
		})
	}

	async list(query?: OpQuery<'Users.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users', query === undefined ? {} : { params: { query } })
		})
	}

	async get(path: OpPath<'Users.Get'>, query?: OpQuery<'Users.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async edit(path: OpPath<'Users.Edit'>, body?: OpBody<'Users.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/users/{user_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async avatarDelete(path: OpPath<'Users.Avatar.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/users/{user_id}/avatar', { params: { path } })
		})
	}

	async avatarUpload(path: OpPath<'Users.Avatar.Upload'>, body?: OpBody<'Users.Avatar.Upload'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/avatar', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async avatarCrop(path: OpPath<'Users.Avatar.Crop'>, body?: OpBody<'Users.Avatar.Crop'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/avatar/crop', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async backgroundDelete(path: OpPath<'Users.Background.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/users/{user_id}/background', { params: { path } })
		})
	}

	async backgroundUpload(path: OpPath<'Users.Background.Upload'>, body?: OpBody<'Users.Background.Upload'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/background', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async backgroundCrop(path: OpPath<'Users.Background.Crop'>, body: OpBody<'Users.Background.Crop'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/background/crop', { params: { path }, body })
		})
	}

	async claims(path: OpPath<'Users.Claims'>, query?: OpQuery<'Users.Claims'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/claims', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async unfollow(path: OpPath<'Users.Unfollow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/users/{user_id}/followers', { params: { path } })
		})
	}

	async followers(path: OpPath<'Users.Followers'>, query?: OpQuery<'Users.Followers'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/followers', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async follow(path: OpPath<'Users.Follow'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/followers', { params: { path } })
		})
	}

	async followings(path: OpPath<'Users.Followings'>, query?: OpQuery<'Users.Followings'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/followings', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async unignore(path: OpPath<'Users.Unignore'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/users/{user_id}/ignore', { params: { path } })
		})
	}

	async ignore(path: OpPath<'Users.Ignore'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/users/{user_id}/ignore', { params: { path } })
		})
	}

	async ignoreEdit(path: OpPath<'Users.IgnoreEdit'>, query?: OpQuery<'Users.IgnoreEdit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/users/{user_id}/ignore', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async likes(path: OpPath<'Users.Likes'>, query?: OpQuery<'Users.Likes'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/likes', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async contents(path: OpPath<'Users.Contents'>, query?: OpQuery<'Users.Contents'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/timeline', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async trophies(path: OpPath<'Users.Trophies'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/{user_id}/trophies', { params: { path } })
		})
	}

	async fields() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/fields')
		})
	}

	async find(query?: OpQuery<'Users.Find'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/find', query === undefined ? {} : { params: { query } })
		})
	}

	async ignored(query?: OpQuery<'Users.Ignored'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/ignored', query === undefined ? {} : { params: { query } })
		})
	}

	async secretAnswerTypes() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/users/secret-answer/types')
		})
	}
}

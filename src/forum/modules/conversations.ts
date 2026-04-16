import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class ConversationsModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'Conversations.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/conversations', body === undefined ? {} : { body })
		})
	}

	async list(query?: OpQuery<'Conversations.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/conversations', query === undefined ? {} : { params: { query } })
		})
	}

	async create(body?: OpBody<'Conversations.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations', body === undefined ? {} : { body })
		})
	}

	async update(body?: OpBody<'Conversations.Update'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/conversations', body === undefined ? {} : { body })
		})
	}

	async get(path: OpPath<'Conversations.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/conversations/{conversation_id}', { params: { path } })
		})
	}

	async alertsDisable(path: OpPath<'Conversations.Alerts.Disable'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/conversations/{conversation_id}/alerts', { params: { path } })
		})
	}

	async alertsEnable(path: OpPath<'Conversations.Alerts.Enable'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/alerts', { params: { path } })
		})
	}

	async invite(path: OpPath<'Conversations.Invite'>, body?: OpBody<'Conversations.Invite'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/invite', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async kick(path: OpPath<'Conversations.Kick'>, body?: OpBody<'Conversations.Kick'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/kick', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async messagesList(path: OpPath<'Conversations.Messages.List'>, query?: OpQuery<'Conversations.Messages.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/conversations/{conversation_id}/messages', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async messagesCreate(path: OpPath<'Conversations.Messages.Create'>, body?: OpBody<'Conversations.Messages.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/messages', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async messagesDelete(path: OpPath<'Conversations.Messages.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/conversations/{conversation_id}/messages/{message_id}', { params: { path } })
		})
	}

	async messagesEdit(path: OpPath<'Conversations.Messages.Edit'>, body?: OpBody<'Conversations.Messages.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/conversations/{conversation_id}/messages/{message_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async messagesUnstick(path: OpPath<'Conversations.Messages.Unstick'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/conversations/{conversation_id}/messages/{message_id}/stick', { params: { path } })
		})
	}

	async messagesStick(path: OpPath<'Conversations.Messages.Stick'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/messages/{message_id}/stick', { params: { path } })
		})
	}

	async read(path: OpPath<'Conversations.Read'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/read', { params: { path } })
		})
	}

	async unstar(path: OpPath<'Conversations.Unstar'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/conversations/{conversation_id}/star', { params: { path } })
		})
	}

	async star(path: OpPath<'Conversations.Star'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/{conversation_id}/star', { params: { path } })
		})
	}

	async messagesGet(path: OpPath<'Conversations.Messages.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/conversations/messages/{message_id}', { params: { path } })
		})
	}

	async readAll() {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/read-all')
		})
	}

	async save(body?: OpBody<'Conversations.Save'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/save', body === undefined ? {} : { body })
		})
	}

	async search(body?: OpBody<'Conversations.Search'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/search', body === undefined ? {} : { body })
		})
	}

	async start(body?: OpBody<'Conversations.Start'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/conversations/start', body === undefined ? {} : { body })
		})
	}
}

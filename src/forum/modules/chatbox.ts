import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/types.js'

export class ChatboxModule {
	constructor(private http: HTTPClient) {}

	async index(query?: OpQuery<'Chatbox.Index'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox', query === undefined ? {} : { params: { query } })
		})
	}

	async deleteIgnore(body?: OpBody<'Chatbox.DeleteIgnore'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/chatbox/ignore', body === undefined ? {} : { body })
		})
	}

	async getIgnore() {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox/ignore')
		})
	}

	async postIgnore(body?: OpBody<'Chatbox.PostIgnore'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/chatbox/ignore', body === undefined ? {} : { body })
		})
	}

	async deleteMessage(body?: OpBody<'Chatbox.DeleteMessage'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.DELETE('/chatbox/messages', body === undefined ? {} : { body })
		})
	}

	async getMessages(query: OpQuery<'Chatbox.GetMessages'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox/messages', { params: { query } })
		})
	}

	async postMessage(body?: OpBody<'Chatbox.PostMessage'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/chatbox/messages', body === undefined ? {} : { body })
		})
	}

	async editMessage(body?: OpBody<'Chatbox.EditMessage'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.PUT('/chatbox/messages', body === undefined ? {} : { body })
		})
	}

	async getLeaderboard(query?: OpQuery<'Chatbox.GetLeaderboard'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox/messages/leaderboard', query === undefined ? {} : { params: { query } })
		})
	}

	async online(query: OpQuery<'Chatbox.Online'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox/messages/online', { params: { query } })
		})
	}

	async reportReasons(query: OpQuery<'Chatbox.ReportReasons'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/chatbox/messages/report', { params: { query } })
		})
	}

	async report(body?: OpBody<'Chatbox.Report'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/chatbox/messages/report', body === undefined ? {} : { body })
		})
	}
}

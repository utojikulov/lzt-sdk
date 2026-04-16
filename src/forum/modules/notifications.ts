import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class NotificationsModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Notifications.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/notifications', query === undefined ? {} : { params: { query } })
		})
	}

	async get(path: OpPath<'Notifications.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/notifications/{notification_id}/content', { params: { path } })
		})
	}

	async read(body?: OpBody<'Notifications.Read'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/notifications/read', body === undefined ? {} : { body })
		})
	}
}

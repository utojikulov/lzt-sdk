import type { HTTPClient } from '../../core/index.js'
import type { OpQuery } from '../common/types.js'

export class NavigationModule {
	constructor(private http: HTTPClient) {}

	async list(query?: OpQuery<'Navigation.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/navigation', query === undefined ? {} : { params: { query } })
		})
	}
}

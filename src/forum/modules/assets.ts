import type { HTTPClient } from '../../core/index.js'
import type { OpQuery } from '../common/types.js'

export class AssetsModule {
	constructor(private http: HTTPClient) {}

	async css(query?: OpQuery<'Assets.Css'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.GET('/css', query === undefined ? {} : { params: { query } })
		})
	}
}

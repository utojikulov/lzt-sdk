import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class OAuthModule {
	constructor(private http: HTTPClient) {}

	async token(body: OpBody<'OAuth.Token'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/oauth/token', { body })
		})
	}
}

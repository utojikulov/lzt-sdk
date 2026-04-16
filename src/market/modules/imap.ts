import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class ImapModule {
	constructor(private http: HTTPClient) {}

	async delete(body?: OpBody<'Imap.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/imap', body === undefined ? {} : { body })
		})
	}

	async create(body?: OpBody<'Imap.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/imap', body === undefined ? {} : { body })
		})
	}
}

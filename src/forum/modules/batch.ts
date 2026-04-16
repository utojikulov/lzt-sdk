import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class BatchModule {
	constructor(private http: HTTPClient) {}

	async execute(body?: OpBody<'Batch.Execute'>) {
		return this.http.withRateLimit(() => {
			return this.http.forum.POST('/batch', body === undefined ? {} : { body })
		})
	}
}

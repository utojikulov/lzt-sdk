import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/types.js'

export class BatchModule {
	constructor(private http: HTTPClient) {}

	async batch(body: OpBody<'Batch'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/batch', { body })
		})
	}
}

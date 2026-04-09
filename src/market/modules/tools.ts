import type { HTTPClient } from '../../core/index.js'
import type { OpBody } from '../common/index.js'

export class ToolsModule {
	constructor(private http: HTTPClient) {}

	async getCustomDiscounts() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/custom-discounts')
		})
	}

	async editCustomDiscount(body?: OpBody<'CustomDiscounts.Edit'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.PUT(
				'/custom-discounts',
				body === undefined ? {} : { body },
			)
		})
	}

	async createCustomDiscount(body?: OpBody<'CustomDiscounts.Create'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/custom-discounts',
				body === undefined ? {} : { body },
			)
		})
	}

	async deleteCustomDiscount(body?: OpBody<'CustomDiscounts.Delete'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE(
				'/custom-discounts',
				body === undefined ? {} : { body },
			)
		})
	}

	async getProxies() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/proxy')
		})
	}

	async addProxy(body: OpBody<'Proxy.Add'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/proxy', { body })
		})
	}

	async deleteProxy(body?: OpBody<'Proxy.Delete'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE(
				'/proxy',
				body === undefined ? {} : { body },
			)
		})
	}

	async createImap(body?: OpBody<'Imap.Create'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/imap',
				body === undefined ? {} : { body },
			)
		})
	}

	async deleteImap(body?: OpBody<'Imap.Delete'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE(
				'/imap',
				body === undefined ? {} : { body },
			)
		})
	}

	async executeBatch(body: OpBody<'Batch'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/batch', { body })
		})
	}
}

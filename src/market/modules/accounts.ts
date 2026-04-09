import type { HTTPClient } from '../../core/index.js'
import type { PathByPath, QueryByPath } from '../common/index.js'

export class AccountsModule {
	constructor(private http: HTTPClient) {}

	async listUserItems(query?: QueryByPath<'/user/items'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/user/items',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async listUserOrders(query?: QueryByPath<'/user/orders'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/user/orders',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async listUserItemStates(query?: QueryByPath<'/user/item-states'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/user/item-states',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async downloadUserList(
		type: PathByPath<'/user/{type}/download'>['type'],
		query?: QueryByPath<'/user/{type}/download'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/user/{type}/download', {
				params: {
					path: { type },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async listFavorites(query?: QueryByPath<'/fave'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/fave',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async listViewed(query?: QueryByPath<'/viewed'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/viewed',
				query === undefined ? {} : { params: { query } },
			)
		})
	}
}

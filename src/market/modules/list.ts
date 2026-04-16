import type { HTTPClient } from '../../core/index.js'
import type { OpPath, OpQuery } from '../common/types.js'

export class ListModule {
	constructor(private http: HTTPClient) {}

	async favorites(query?: OpQuery<'List.Favorites'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/fave', query === undefined ? {} : { params: { query } })
		})
	}

	async download(path: OpPath<'List.Download'>, query?: OpQuery<'List.Download'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/user/{type}/download', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async states(query?: OpQuery<'List.States'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/user/item-states', query === undefined ? {} : { params: { query } })
		})
	}

	async user(query?: OpQuery<'List.User'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/user/items', query === undefined ? {} : { params: { query } })
		})
	}

	async orders(query?: OpQuery<'List.Orders'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/user/orders', query === undefined ? {} : { params: { query } })
		})
	}

	async viewed(query?: OpQuery<'List.Viewed'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/viewed', query === undefined ? {} : { params: { query } })
		})
	}
}

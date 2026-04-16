import type { HTTPClient } from '../../core/index.js'
import type { OpPath, OpQuery } from '../common/types.js'

export class CategoryModule {
	constructor(private http: HTTPClient) {}

	async all(query?: OpQuery<'Category.All'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/', query === undefined ? {} : { params: { query } })
		})
	}

	async games(path: OpPath<'Category.Games'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{categoryName}/games', { params: { path } })
		})
	}

	async params(path: OpPath<'Category.Params'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{categoryName}/params', { params: { path } })
		})
	}

	async battleNet(query?: OpQuery<'Category.BattleNet'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/battlenet', query === undefined ? {} : { params: { query } })
		})
	}

	async list(query?: OpQuery<'Category.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/category', query === undefined ? {} : { params: { query } })
		})
	}

	async chatGPT(query?: OpQuery<'Category.ChatGPT'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/chatgpt', query === undefined ? {} : { params: { query } })
		})
	}

	async discord(query?: OpQuery<'Category.Discord'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/discord', query === undefined ? {} : { params: { query } })
		})
	}

	async ea(query?: OpQuery<'Category.EA'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/ea', query === undefined ? {} : { params: { query } })
		})
	}

	async epicGames(query?: OpQuery<'Category.EpicGames'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/epicgames', query === undefined ? {} : { params: { query } })
		})
	}

	async escapeFromTarkov(query?: OpQuery<'Category.EscapeFromTarkov'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/escape-from-tarkov', query === undefined ? {} : { params: { query } })
		})
	}

	async fortnite(query?: OpQuery<'Category.Fortnite'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/fortnite', query === undefined ? {} : { params: { query } })
		})
	}

	async gifts(query?: OpQuery<'Category.Gifts'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/gifts', query === undefined ? {} : { params: { query } })
		})
	}

	async hytale(query?: OpQuery<'Category.Hytale'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/hytale', query === undefined ? {} : { params: { query } })
		})
	}

	async instagram(query?: OpQuery<'Category.Instagram'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/instagram', query === undefined ? {} : { params: { query } })
		})
	}

	async mihoyo(query?: OpQuery<'Category.Mihoyo'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/mihoyo', query === undefined ? {} : { params: { query } })
		})
	}

	async minecraft(query?: OpQuery<'Category.Minecraft'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/minecraft', query === undefined ? {} : { params: { query } })
		})
	}

	async riot(query?: OpQuery<'Category.Riot'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/riot', query === undefined ? {} : { params: { query } })
		})
	}

	async roblox(query?: OpQuery<'Category.Roblox'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/roblox', query === undefined ? {} : { params: { query } })
		})
	}

	async socialClub(query?: OpQuery<'Category.SocialClub'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/socialclub', query === undefined ? {} : { params: { query } })
		})
	}

	async steam(query?: OpQuery<'Category.Steam'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/steam', query === undefined ? {} : { params: { query } })
		})
	}

	async supercell(query?: OpQuery<'Category.Supercell'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/supercell', query === undefined ? {} : { params: { query } })
		})
	}

	async telegram(query?: OpQuery<'Category.Telegram'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/telegram', query === undefined ? {} : { params: { query } })
		})
	}

	async tikTok(query?: OpQuery<'Category.TikTok'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/tiktok', query === undefined ? {} : { params: { query } })
		})
	}

	async uplay(query?: OpQuery<'Category.Uplay'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/uplay', query === undefined ? {} : { params: { query } })
		})
	}

	async vpn(query?: OpQuery<'Category.Vpn'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/vpn', query === undefined ? {} : { params: { query } })
		})
	}

	async warface(query?: OpQuery<'Category.Warface'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/warface', query === undefined ? {} : { params: { query } })
		})
	}

	async wot(query?: OpQuery<'Category.Wot'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/world-of-tanks', query === undefined ? {} : { params: { query } })
		})
	}

	async wotBlitz(query?: OpQuery<'Category.WotBlitz'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/wot-blitz', query === undefined ? {} : { params: { query } })
		})
	}
}

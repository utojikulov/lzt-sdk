import type { HTTPClient } from '../../core/index.js'
import {
	CATEGORY_PATH,
	type CategoryName,
	type CategoryPath,
	type CategoryQuery,
	type CategorySlug,
	type PathByPath,
	type QueryByPath,
} from '../common/index.js'

export class CategoryModule {
	constructor(private http: HTTPClient) {}

	private slugToCategoryName<S extends CategorySlug>(
		category: S,
	): CategoryName {
		return CATEGORY_PATH[category].slice(1) as CategoryName
	}

	async searchCategory<S extends CategorySlug>(
		category: S,
		query?: CategoryQuery<S>,
	) {
		return this.http.withRateLimit(async () => {
			const path = CATEGORY_PATH[category] as CategoryPath<S>

			return await this.http.market.GET(
				path as never,
				{
					params: { query },
				} as never,
			)
		})
	}

	async searchSteam(query?: CategoryQuery<'steam'>) {
		return this.searchCategory('steam', query)
	}

	async searchTelegram(query?: CategoryQuery<'telegram'>) {
		return this.searchCategory('telegram', query)
	}

	async searchFortnite(query?: CategoryQuery<'fortnite'>) {
		return this.searchCategory('fortnite', query)
	}

	async searchMihoyo(query?: CategoryQuery<'mihoyo'>) {
		return this.searchCategory('mihoyo', query)
	}

	async searchRiot(query?: CategoryQuery<'riot'>) {
		return this.searchCategory('riot', query)
	}

	async searchSupercell(query?: CategoryQuery<'supercell'>) {
		return this.searchCategory('supercell', query)
	}

	async searchEA(query?: CategoryQuery<'ea'>) {
		return this.searchCategory('ea', query)
	}

	async searchWot(query?: CategoryQuery<'wot'>) {
		return this.searchCategory('wot', query)
	}

	async searchWotBlitz(query?: CategoryQuery<'wotBlitz'>) {
		return this.searchCategory('wotBlitz', query)
	}

	async searchGifts(query?: CategoryQuery<'gifts'>) {
		return this.searchCategory('gifts', query)
	}

	async searchEpicGames(query?: CategoryQuery<'epicGames'>) {
		return this.searchCategory('epicGames', query)
	}

	async searchEscapeFromTarkov(query?: CategoryQuery<'escapeFromTarkov'>) {
		return this.searchCategory('escapeFromTarkov', query)
	}

	async searchSocialClub(query?: CategoryQuery<'socialClub'>) {
		return this.searchCategory('socialClub', query)
	}

	async searchUplay(query?: CategoryQuery<'uplay'>) {
		return this.searchCategory('uplay', query)
	}

	async searchDiscord(query?: CategoryQuery<'discord'>) {
		return this.searchCategory('discord', query)
	}

	async searchTiktok(query?: CategoryQuery<'tiktok'>) {
		return this.searchCategory('tiktok', query)
	}

	async searchInstagram(query?: CategoryQuery<'instagram'>) {
		return this.searchCategory('instagram', query)
	}

	async searchBattleNet(query?: CategoryQuery<'battleNet'>) {
		return this.searchCategory('battleNet', query)
	}

	async searchChatGPT(query?: CategoryQuery<'chatgpt'>) {
		return this.searchCategory('chatgpt', query)
	}

	async searchVpn(query?: CategoryQuery<'vpn'>) {
		return this.searchCategory('vpn', query)
	}

	async searchRoblox(query?: CategoryQuery<'roblox'>) {
		return this.searchCategory('roblox', query)
	}

	async searchWarface(query?: CategoryQuery<'warface'>) {
		return this.searchCategory('warface', query)
	}

	async searchMinecraft(query?: CategoryQuery<'minecraft'>) {
		return this.searchCategory('minecraft', query)
	}

	async searchHytale(query?: CategoryQuery<'hytale'>) {
		return this.searchCategory('hytale', query)
	}

	/** categories */
	async listCategories(query?: QueryByPath<'/category'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/category',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async getCategoryParams(
		categoryName: PathByPath<'/{categoryName}/params'>['categoryName'],
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/{categoryName}/params', {
				params: { path: { categoryName } },
			})
		})
	}

	async getCategoryGames(
		categoryName: PathByPath<'/{categoryName}/games'>['categoryName'],
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/{categoryName}/games', {
				params: { path: { categoryName } },
			})
		})
	}

	async getCategoryParamsBySlug<S extends CategorySlug>(category: S) {
		return this.getCategoryParams(this.slugToCategoryName(category))
	}

	async getCategoryGamesBySlug<S extends CategorySlug>(category: S) {
		return this.getCategoryGames(this.slugToCategoryName(category))
	}
}

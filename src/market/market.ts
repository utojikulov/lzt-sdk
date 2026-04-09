import type { HTTPClient } from '../http/index.js'
import type {
	CategoryName,
	CategoryPath,
	CategoryQuery,
	CategorySlug,
	OpBody,
	OpPath,
	OpQuery,
	PathByPath,
	QueryByPath,
} from './categories/types.js'
import { CATEGORY_PATH } from './categories/registry.js'

export class MarketAPI {
	private http: HTTPClient

	constructor(http: HTTPClient) {
		this.http = http
	}

	get raw() {
		return this.http.market
	}

	private slugToCategoryName<S extends CategorySlug>(
		category: S,
	): CategoryName {
		return CATEGORY_PATH[category].slice(1) as CategoryName
	}

	/** category search */
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

	/** accounts list*/
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

	/** accounts managing */
	async getItem(
		item_id: OpPath<'Managing.Get'>['item_id'],
		query?: OpQuery<'Managing.Get'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async createClaim(options?: {
		query?: OpQuery<'Managing.CreateClaim'>
		body: OpBody<'Managing.CreateClaim'>
	}) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/claims', {
				...(options?.query === undefined
					? {}
					: { params: { query: options.query } }),
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async bulkGetItems(body: OpBody<'Managing.BulkGet'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/bulk/items', {
				body,
			})
		})
	}

	async editItem(
		item_id: OpPath<'Managing.Edit'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Edit'>
			body?: OpBody<'Managing.Edit'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.PUT('/{item_id}/edit', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async getAIPrice(
		item_id: OpPath<'Managing.AIPrice'>['item_id'],
		query?: OpQuery<'Managing.AIPrice'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}/ai-price',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async getAutoBuyPrice(
		item_id: OpPath<'Managing.AutoBuyPrice'>['item_id'],
		query?: OpQuery<'Managing.AutoBuyPrice'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}/auto-buy-price',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async saveNote(
		item_id: OpPath<'Managing.Note'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Note'>
			body?: OpBody<'Managing.Note'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/note-save', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async bumpItem(
		item_id: OpPath<'Managing.Bump'>['item_id'],
		query?: OpQuery<'Managing.Bump'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/bump', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async enableAutoBump(
		item_id: OpPath<'Managing.AutoBump'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.AutoBump'>
			body?: OpBody<'Managing.AutoBump'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/auto-bump', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async disableAutoBump(
		item_id: OpPath<'Managing.AutoBumpDisable'>['item_id'],
		query?: OpQuery<'Managing.AutoBumpDisable'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/auto-bump', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async openItem(
		item_id: OpPath<'Managing.Open'>['item_id'],
		query?: OpQuery<'Managing.Open'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/open', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async closeItem(
		item_id: OpPath<'Managing.Close'>['item_id'],
		query?: OpQuery<'Managing.Close'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/close', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async getItemImage(
		item_id: OpPath<'Managing.Image'>['item_id'],
		query: OpQuery<'Managing.Image'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/{item_id}/image', {
				params: { path: { item_id }, query },
			})
		})
	}

	async getEmailCode(
		item_id: OpPath<'Managing.EmailCode'>['item_id'],
		query?: OpQuery<'Managing.EmailCode'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}/email-code',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async getLetters2(query?: OpQuery<'Managing.GetLetters2'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/letters2',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async getTelegramLoginCode(
		item_id: OpPath<'Managing.TelegramCode'>['item_id'],
		query?: OpQuery<'Managing.TelegramCode'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}/telegram-login-code',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async resetTelegramAuthorizations(
		item_id: OpPath<'Managing.TelegramResetAuth'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.TelegramResetAuth'>
			body?: OpBody<'Managing.TelegramResetAuth'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/telegram-reset-authorizations',
				{
					params: {
						path: { item_id },
						...(options?.query === undefined
							? {}
							: { query: options.query }),
					},
					...(options?.body === undefined ? {} : { body: options.body }),
				},
			)
		})
	}

	async refuseGuarantee(
		item_id: OpPath<'Managing.RefuseGuarantee'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.RefuseGuarantee'>
			body?: OpBody<'Managing.RefuseGuarantee'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/refuse-guarantee', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async declineVideoRecording(
		item_id: OpPath<'Managing.DeclineVideoRecording'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.DeclineVideoRecording'>
			body?: OpBody<'Managing.DeclineVideoRecording'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/{item_id}/decline-video-recording',
				{
					params: {
						path: { item_id },
						...(options?.query === undefined
							? {}
							: { query: options.query }),
					},
					...(options?.body === undefined ? {} : { body: options.body }),
				},
			)
		})
	}

	async checkGuarantee(
		item_id: OpPath<'Managing.CheckGuarantee'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.CheckGuarantee'>
			body?: OpBody<'Managing.CheckGuarantee'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/check-guarantee', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async changePassword(
		item_id: OpPath<'Managing.ChangePassword'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.ChangePassword'>
			body?: OpBody<'Managing.ChangePassword'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/change-password', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async getTempEmailPassword(
		item_id: OpPath<'Managing.TempEmailPassword'>['item_id'],
		query?: OpQuery<'Managing.TempEmailPassword'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/{item_id}/temp-email-password',
				query === undefined
					? { params: { path: { item_id } } }
					: { params: { path: { item_id }, query } },
			)
		})
	}

	async tagItem(
		item_id: OpPath<'Managing.Tag'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Tag'>
			body?: OpBody<'Managing.Tag'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/tag', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async untagItem(
		item_id: OpPath<'Managing.Untag'>['item_id'],
		query?: OpQuery<'Managing.Untag'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/tag', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async publicTagItem(
		item_id: OpPath<'Managing.PublicTag'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.PublicTag'>
			body?: OpBody<'Managing.PublicTag'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/public-tag', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async publicUntagItem(
		item_id: OpPath<'Managing.PublicUntag'>['item_id'],
		query?: OpQuery<'Managing.PublicUntag'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/public-tag', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async favoriteItem(
		item_id: OpPath<'Managing.Favorite'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Favorite'>
			body?: OpBody<'Managing.Favorite'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/star', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async unfavoriteItem(
		item_id: OpPath<'Managing.Unfavorite'>['item_id'],
		query?: OpQuery<'Managing.Unfavorite'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/star', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async stickItem(
		item_id: OpPath<'Managing.Stick'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Stick'>
			body?: OpBody<'Managing.Stick'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/stick', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	async unstickItem(
		item_id: OpPath<'Managing.Unstick'>['item_id'],
		query?: OpQuery<'Managing.Unstick'>,
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE('/{item_id}/stick', {
				params: {
					path: { item_id },
					...(query === undefined ? {} : { query }),
				},
			})
		})
	}

	async transferItem(
		item_id: OpPath<'Managing.Transfer'>['item_id'],
		options?: {
			query?: OpQuery<'Managing.Transfer'>
			body?: OpBody<'Managing.Transfer'>
		},
	) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST('/{item_id}/change-owner', {
				params: {
					path: { item_id },
					...(options?.query === undefined
						? {}
						: { query: options.query }),
				},
				...(options?.body === undefined ? {} : { body: options.body }),
			})
		})
	}

	// Steam-specific managing methods intentionally skipped for now.

	// More convenience methods can be added here
	// But users can also use client.market.raw.GET/POST/etc for full access
}

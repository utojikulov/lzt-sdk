import type {
	components,
	operations,
	paths as MarketPaths,
} from '../../core/generated/market.types.js'
import type { CATEGORY_PATH } from './registry.js'

export type CategorySlug = keyof typeof CATEGORY_PATH
export type CategoryPath<S extends CategorySlug> = (typeof CATEGORY_PATH)[S]
export type CategoryName = components['parameters']['categoryName']

export type QueryByPath<P extends keyof MarketPaths> = MarketPaths[P] extends {
	get: { parameters: { query?: infer Q } }
}
	? Exclude<Q, undefined | never>
	: never

export type PathByPath<P extends keyof MarketPaths> = MarketPaths[P] extends {
	get: { parameters: { path: infer PP } }
}
	? Exclude<PP, undefined | never>
	: never

export type BaseCategoryQuery = QueryByPath<'/'>
export type CategoryQuery<S extends CategorySlug> = QueryByPath<CategoryPath<S>>

export type ContentValue<C> = C extends Record<string, infer V> ? V : never

export type OpQuery<K extends keyof operations> = operations[K] extends {
	parameters: { query?: infer Q }
}
	? Exclude<Q, undefined | never>
	: never

export type OpPath<K extends keyof operations> = operations[K] extends {
	parameters: { path: infer P }
}
	? Exclude<P, undefined | never>
	: never

export type OpBody<K extends keyof operations> = operations[K] extends {
	requestBody?: infer RB
}
	? RB extends { content: infer C }
		? ContentValue<C>
		: never
	: never

export enum ItemOriginModel {
	/**
	 * Item Origin
	 * @description Account origin.
	 * @enum {string}
	 */
	'brute',
	'phishing',
	'stealer',
	'autoreg',
	'personal',
	'resale',
	'dummy',
	'self_registration',
	'retrieve_via_support',
}

export enum CategoryIDModel {
	/**
	 * Category Id
	 * @description Accounts category.
	 * @enum {integer}
	 */
	Steam = 1,
	EA = 3,
	Warface = 4,
	Uplay = 5,
	ChatGPT = 6,
	SocialClub = 7,
	Hytale = 8,
	Fortnite = 9,
	Instagram = 10,
	Battlenet = 11,
	EpicGames = 12,
	Riot = 13,
	WorldOfTanks = 14,
	Supercell = 15,
	WOTBlitz = 16,
	miHoYo = 17,
	EscapeFromTarkov = 18,
	VPN = 19,
	Tiktok = 20,
	Discord = 22,
	Telegram = 24,
	Minecraft = 28,
	Gifts = 30,
	Roblox = 31,
}

export enum OrderBy {
	/** @description Order by. */
	PRICE_ASC = 'price_to_up',
	PRICE_DESC = 'price_to_down',
	PDATE_DESC = 'pdate_to_down',
	PDATE_ASC = 'pdate_to_up',
	PDATE_UPLOAD_DESC = 'pdate_to_down_upload',
	PDATE_UPLOAD_ASC = 'pdate_to_up_upload',
	EDATE_ASC = 'edate_to_up',
	EDATE_DESC = 'edate_to_down',
	DDATE_ASC = 'ddate_to_up',
	DDATE_DESC = 'ddate_to_down',
}

export enum Currency {
	/** @description Currency in which the cost of the account will be searched. */
	RUB = 'rub',
	UAH = 'uah',
	KZT = 'kzt',
	BYN = 'byn',
	USD = 'usd',
	EUR = 'eur',
	GBP = 'gbp',
	CNY = 'cny',
	TRY = 'try',
	JPY = 'jpy',
	BRL = 'brl',
}

export enum EmailType {
	/** @description Email type. */
	AUTOREG = 'autoreg',
	NATIVE = 'native',
	NO = 'no',
	NO_MARKET = 'no_market',
}

export enum EmailProvider {
	/** @description Email provider. */
	OTHER = 'other',
	RAMBLER = 'rambler',
	OUTLOOK = 'outlook',
	FIRSTMALL = 'firstmail',
	NOTLETTERS = 'notletters',
	MAILRU = 'mail_ru',
}

export enum Spam {
	/** @description Has a spam ban. */
	YES = 'yes',
	NO = 'no',
	NO_MATTER = 'nomatter',
}

export enum Password {
	/** @description Has a cloud password. */
	YES = 'yes',
	NO = 'no',
	NO_MATTER = 'nomatter',
}
export enum Premium {
	/** @description Has a premium subscription. */
	YES = 'yes',
	NO = 'no',
	NO_MATTER = 'nomatter',
}

export enum PremiumExpirationPeriod {
	/** @description In what notation is time measured */
	DAY = 'day',
	MONTH = 'month',
	YEAR = 'year',
}

export interface MarketSearchParams {
	categoryName?: string
	pmin?: number
	pmax?: number
	title?: string
}

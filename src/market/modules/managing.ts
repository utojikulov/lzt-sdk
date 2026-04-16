import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpPath, OpQuery } from '../common/types.js'

export class ManagingModule {
	constructor(private http: HTTPClient) {}

	async delete(path: OpPath<'Manging.Delete'>, body?: OpBody<'Manging.Delete'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async get(path: OpPath<'Managing.Get'>, query?: OpQuery<'Managing.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async aiPrice(path: OpPath<'Managing.AIPrice'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/ai-price', { params: { path } })
		})
	}

	async autoBumpDisable(path: OpPath<'Managing.AutoBumpDisable'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/auto-bump', { params: { path } })
		})
	}

	async autoBump(path: OpPath<'Managing.AutoBump'>, body?: OpBody<'Managing.AutoBump'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/auto-bump', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async autoBuyPrice(path: OpPath<'Managing.AutoBuyPrice'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/auto-buy-price', { params: { path } })
		})
	}

	async bump(path: OpPath<'Managing.Bump'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/bump', { params: { path } })
		})
	}

	async transfer(path: OpPath<'Managing.Transfer'>, body?: OpBody<'Managing.Transfer'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/change-owner', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async changePassword(path: OpPath<'Managing.ChangePassword'>, body?: OpBody<'Managing.ChangePassword'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/change-password', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async checkGuarantee(path: OpPath<'Managing.CheckGuarantee'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/check-guarantee', { params: { path } })
		})
	}

	async close(path: OpPath<'Managing.Close'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/close', { params: { path } })
		})
	}

	async steamSDA(path: OpPath<'Managing.SteamSDA'>, body?: OpBody<'Managing.SteamSDA'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/confirm-sda', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async declineVideoRecording(path: OpPath<'Managing.DeclineVideoRecording'>, body?: OpBody<'Managing.DeclineVideoRecording'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/decline-video-recording', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async edit(path: OpPath<'Managing.Edit'>, body?: OpBody<'Managing.Edit'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.PUT('/{item_id}/edit', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async emailCode(path: OpPath<'Managing.EmailCode'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/email-code', { params: { path } })
		})
	}

	async steamMafileCode(path: OpPath<'Managing.SteamMafileCode'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/guard-code', { params: { path } })
		})
	}

	async image(path: OpPath<'Managing.Image'>, query: OpQuery<'Managing.Image'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/image', { params: { path, query } })
		})
	}

	async steamInventoryValue(path: OpPath<'Managing.SteamInventoryValue'>, query?: OpQuery<'Managing.SteamInventoryValue'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/inventory-value', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async steamRemoveMafile(path: OpPath<'Managing.Steam.RemoveMafile'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/mafile', { params: { path } })
		})
	}

	async steamGetMafile(path: OpPath<'Managing.Steam.GetMafile'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/mafile', { params: { path } })
		})
	}

	async steamAddMafile(path: OpPath<'Managing.Steam.AddMafile'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/mafile', { params: { path } })
		})
	}

	async note(path: OpPath<'Managing.Note'>, body?: OpBody<'Managing.Note'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/note-save', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async open(path: OpPath<'Managing.Open'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/open', { params: { path } })
		})
	}

	async publicUntag(path: OpPath<'Managing.PublicUntag'>, body?: OpBody<'Managing.PublicUntag'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/public-tag', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async publicTag(path: OpPath<'Managing.PublicTag'>, body?: OpBody<'Managing.PublicTag'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/public-tag', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async refuseGuarantee(path: OpPath<'Managing.RefuseGuarantee'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/refuse-guarantee', { params: { path } })
		})
	}

	async unfavorite(path: OpPath<'Managing.Unfavorite'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/star', { params: { path } })
		})
	}

	async favorite(path: OpPath<'Managing.Favorite'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/star', { params: { path } })
		})
	}

	async steamPreview(path: OpPath<'Managing.SteamPreview'>, query?: OpQuery<'Managing.SteamPreview'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/steam-preview', query === undefined
				? { params: { path } }
				: { params: { path, query } })
		})
	}

	async unstick(path: OpPath<'Managing.Unstick'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/stick', { params: { path } })
		})
	}

	async stick(path: OpPath<'Managing.Stick'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/stick', { params: { path } })
		})
	}

	async untag(path: OpPath<'Managing.Untag'>, body?: OpBody<'Managing.Untag'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.DELETE('/{item_id}/tag', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async tag(path: OpPath<'Managing.Tag'>, body?: OpBody<'Managing.Tag'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/tag', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async telegramCode(path: OpPath<'Managing.TelegramCode'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/telegram-login-code', { params: { path } })
		})
	}

	async telegramResetAuth(path: OpPath<'Managing.TelegramResetAuth'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/telegram-reset-authorizations', { params: { path } })
		})
	}

	async tempEmailPassword(path: OpPath<'Managing.TempEmailPassword'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/{item_id}/temp-email-password', { params: { path } })
		})
	}

	async steamUpdateValue(path: OpPath<'Managing.SteamUpdateValue'>, body?: OpBody<'Managing.SteamUpdateValue'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/{item_id}/update-inventory', body === undefined
				? { params: { path } }
				: { params: { path }, body })
		})
	}

	async bulkGet(body: OpBody<'Managing.BulkGet'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/bulk/items', { body })
		})
	}

	async createClaim(body?: OpBody<'Managing.CreateClaim'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/claims', body === undefined ? {} : { body })
		})
	}

	async getLetters2(query?: OpQuery<'Managing.GetLetters2'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/letters2', query === undefined ? {} : { params: { query } })
		})
	}

	async steamValue(query: OpQuery<'Managing.SteamValue'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/steam-value', { params: { query } })
		})
	}
}

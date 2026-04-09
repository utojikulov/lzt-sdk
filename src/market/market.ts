import type { HTTPClient } from '../core/index.js'
import { AccountsModule } from './modules/accounts.js'
import { CartModule } from './modules/cart.js'
import { CategoryModule } from './modules/category.js'
import { ManagingModule } from './modules/managing.js'
import { PaymentsModule } from './modules/payments.js'
import { ProfileModule } from './modules/profile.js'
import { PublishingModule } from './modules/publishing.js'
import { PurchasingModule } from './modules/purchasing.js'
import { ToolsModule } from './modules/tools.js'

export class MarketAPI {
	readonly category: CategoryModule
	readonly accounts: AccountsModule
	readonly managing: ManagingModule
	readonly cart: CartModule
	readonly purchasing: PurchasingModule
	readonly publishing: PublishingModule
	readonly profile: ProfileModule
	readonly payments: PaymentsModule
	readonly tools: ToolsModule

	constructor(private http: HTTPClient) {
		this.category = new CategoryModule(http)
		this.accounts = new AccountsModule(http)
		this.managing = new ManagingModule(http)
		this.cart = new CartModule(http)
		this.purchasing = new PurchasingModule(http)
		this.publishing = new PublishingModule(http)
		this.profile = new ProfileModule(http)
		this.payments = new PaymentsModule(http)
		this.tools = new ToolsModule(http)
	}

	get raw() {
		return this.http.market
	}
}

import type { HTTPClient } from '../core/index.js'
import { AutoPaymentsModule } from './modules/auto-payments.js'
import { BatchModule } from './modules/batch.js'
import { CartModule } from './modules/cart.js'
import { CategoryModule } from './modules/category.js'
import { CustomDiscountsModule } from './modules/custom-discounts.js'
import { ImapModule } from './modules/imap.js'
import { ListModule } from './modules/list.js'
import { ManagingModule } from './modules/managing.js'
import { PaymentsModule } from './modules/payments.js'
import { ProfileModule } from './modules/profile.js'
import { ProxyModule } from './modules/proxy.js'
import { PublishingModule } from './modules/publishing.js'
import { PurchasingModule } from './modules/purchasing.js'

export class MarketAPI {
	readonly autoPayments: AutoPaymentsModule
	readonly batch: BatchModule
	readonly cart: CartModule
	readonly category: CategoryModule
	readonly customDiscounts: CustomDiscountsModule
	readonly imap: ImapModule
	readonly list: ListModule
	readonly managing: ManagingModule
	readonly payments: PaymentsModule
	readonly profile: ProfileModule
	readonly proxy: ProxyModule
	readonly publishing: PublishingModule
	readonly purchasing: PurchasingModule

	constructor(private http: HTTPClient) {
		this.autoPayments = new AutoPaymentsModule(http)
		this.batch = new BatchModule(http)
		this.cart = new CartModule(http)
		this.category = new CategoryModule(http)
		this.customDiscounts = new CustomDiscountsModule(http)
		this.imap = new ImapModule(http)
		this.list = new ListModule(http)
		this.managing = new ManagingModule(http)
		this.payments = new PaymentsModule(http)
		this.profile = new ProfileModule(http)
		this.proxy = new ProxyModule(http)
		this.publishing = new PublishingModule(http)
		this.purchasing = new PurchasingModule(http)
	}

	get raw() {
		return this.http.market
	}
}

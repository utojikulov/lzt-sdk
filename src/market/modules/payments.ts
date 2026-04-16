import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/types.js'

export class PaymentsModule {
	constructor(private http: HTTPClient) {}

	async balanceList() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/balance/exchange')
		})
	}

	async balanceExchange(body?: OpBody<'Payments.BalanceExchange'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/balance/exchange', body === undefined ? {} : { body })
		})
	}

	async payout(body?: OpBody<'Payments.Payout'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/balance/payout', body === undefined ? {} : { body })
		})
	}

	async payoutServices() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/balance/payout/services')
		})
	}

	async transfer(body?: OpBody<'Payments.Transfer'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/balance/transfer', body === undefined ? {} : { body })
		})
	}

	async cancel(body?: OpBody<'Payments.Cancel'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/balance/transfer/cancel', body === undefined ? {} : { body })
		})
	}

	async fee(query?: OpQuery<'Payments.Fee'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/balance/transfer/fee', query === undefined ? {} : { params: { query } })
		})
	}

	async currency() {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/currency')
		})
	}

	async invoiceGet(query?: OpQuery<'Payments.Invoice.Get'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/invoice', query === undefined ? {} : { params: { query } })
		})
	}

	async invoiceCreate(body?: OpBody<'Payments.Invoice.Create'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.POST('/invoice', body === undefined ? {} : { body })
		})
	}

	async invoiceList(query?: OpQuery<'Payments.Invoice.List'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/invoice/list', query === undefined ? {} : { params: { query } })
		})
	}

	async history(query?: OpQuery<'Payments.History'>) {
		return this.http.withRateLimit(() => {
			return this.http.market.GET('/user/payments', query === undefined ? {} : { params: { query } })
		})
	}
}

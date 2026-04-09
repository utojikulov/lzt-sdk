import type { HTTPClient } from '../../core/index.js'
import type { OpBody, OpQuery } from '../common/index.js'

export class PaymentsModule {
	constructor(private http: HTTPClient) {}

	async getInvoice(query?: OpQuery<'Payments.Invoice.Get'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/invoice',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async createInvoice(body?: OpBody<'Payments.Invoice.Create'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/invoice',
				body === undefined ? {} : { body },
			)
		})
	}

	async listInvoices(query?: OpQuery<'Payments.Invoice.List'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/invoice/list',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async getCurrency() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/currency')
		})
	}

	async getListOfBalances() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/balance/exchange')
		})
	}

	async exchangeBalance(body?: OpBody<'Payments.BalanceExchange'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/balance/exchange',
				body === undefined ? {} : { body },
			)
		})
	}

	async transferMoney(body?: OpBody<'Payments.Transfer'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/balance/transfer',
				body === undefined ? {} : { body },
			)
		})
	}

	async checkTransferFee(query?: OpQuery<'Payments.Fee'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/balance/transfer/fee',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async cancelTransfer(body?: OpBody<'Payments.Cancel'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/balance/transfer/cancel',
				body === undefined ? {} : { body },
			)
		})
	}

	async getPaymentsHistory(query?: OpQuery<'Payments.History'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET(
				'/user/payments',
				query === undefined ? {} : { params: { query } },
			)
		})
	}

	async getAutoPayments() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/auto-payments')
		})
	}

	async createAutoPayment(body?: OpBody<'AutoPayments.Create'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/auto-payment',
				body === undefined ? {} : { body },
			)
		})
	}

	async deleteAutoPayment(body?: OpBody<'AutoPayments.Delete'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.DELETE(
				'/auto-payment',
				body === undefined ? {} : { body },
			)
		})
	}

	async getPayoutServices() {
		return this.http.withRateLimit(async () => {
			return await this.http.market.GET('/balance/payout/services')
		})
	}

	async createPayout(body?: OpBody<'Payments.Payout'>) {
		return this.http.withRateLimit(async () => {
			return await this.http.market.POST(
				'/balance/payout',
				body === undefined ? {} : { body },
			)
		})
	}
}

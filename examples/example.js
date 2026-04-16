import { LZTClient } from '../dist/index.js'
import * as dotenv from 'dotenv'

dotenv.config()

function getToken() {
	const token = process.env.LZT_TOKEN

	if (!token) {
		throw new Error('LZT_TOKEN not found.')
	}

	return token
}

function createClient() {
	return new LZTClient({
		token: getToken(),
	})
}

function parseTelegramJson(item) {
	try {
		return JSON.parse(item.telegram_json)
	} catch (err) {
		console.error(
			`Failed to parse telegram_json for item_id: ${item.item_id}`,
		)
		console.error(err)
		return null
	}
}

function mapTelegramItems(items = []) {
	return items.map(parseTelegramJson).filter(Boolean)
}

async function fetchOrdersRaw(client) {
	const { data, error } = await client.market.raw.GET('/user/orders', {
		params: {
			query: {
				category_id: 24,
			},
		},
	})

	if (error) {
		throw new Error(`Raw orders request failed: ${JSON.stringify(error)}`)
	}

	return mapTelegramItems(data?.items)
}

async function fetchOrdersTyped(client) {
	const { data, error } = await client.market.list.orders()

	if (error) {
		throw new Error(`Typed orders request failed: ${JSON.stringify(error)}`)
	}

	return mapTelegramItems(data?.items)
}

function printAccounts(label, accounts) {
	console.log(`✅ ${label}: found ${accounts.length} accounts`)
	console.log(accounts)
}

async function main() {
	try {
		const client = createClient()

		const rawAccounts = await fetchOrdersRaw(client)
		printAccounts('Raw method', rawAccounts)

		const typedAccounts = await fetchOrdersTyped(client)
		printAccounts('Typed method', typedAccounts)

		console.log('\n✨ Test completed!\n')
	} catch (err) {
		console.error('❌ Error:', err.message || err)
		process.exit(1)
	}
}

main()

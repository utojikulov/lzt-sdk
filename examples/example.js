import { LZTClient } from '../dist/index.js'
import * as dotenv from 'dotenv'

dotenv.config()

const API_TOKEN = process.env.LZT_TOKEN

if (!API_TOKEN) {
	console.error('❌ Please set LZT_TOKEN environment variable')
	console.log('\nRun: export LZT_TOKEN="your_token"')
	process.exit(1)
}

const client = new LZTClient({
	token: API_TOKEN,
})

const { data, error } = await client.market.raw.GET('/user/orders', {
	params: {
		query: {
			category_id: 24,
		},
	},
})

const clean = data.items.map(item => {
	try {
		return JSON.parse(item.telegram_json)
	} catch (error) {
		console.error(
			`failed to parse telegram_json for item_id: ${item.item_id}`,
		)
		console.error(error)
	}
})

if (error) {
	console.error('❌ Error:', error)
} else {
	console.log('✅ Found', clean, 'accounts')
}

const userResult = await client.market.raw.GET('/me')
if (!userResult.error) {
	console.log('✅ User:', userResult.data?.user?.username)
	console.log('✅ Balance:', userResult.data?.user?.balance)
}

console.log('\n✨ Test completed!\n')

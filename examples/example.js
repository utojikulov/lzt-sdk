import { LZTClient } from "../dist/index.js"

const API_TOKEN = 'TOKEN'

console.log('🧪 Testing Built Package (JavaScript/ESM)\n')

if (!API_TOKEN) {
	console.error('❌ Please set LZT_TOKEN environment variable')
	console.log('\nRun: export LZT_TOKEN="your_token"')
	process.exit(1)
}

const client = new LZTClient({
	token: API_TOKEN,
	intervalBetweenRequests: 1000,
})

console.log('✅ Client created')
console.log('✅ Market API available:', !!client.market)
console.log('✅ Forum API available:', !!client.forum)

// Test Market API
console.log('\n📋 Testing Market API...')
const { data, error } = await client.market.raw.GET('/', {
	params: { query: { page: 1 } },
})

if (error) {
	console.error('❌ Error:', error)
} else {
	console.log('✅ Found', data?.items?.length, 'accounts')
}

// Test User Info
const userResult = await client.market.raw.GET('/me')
if (!userResult.error) {
	console.log('✅ User:', userResult.data?.user?.username)
	console.log('✅ Balance:', userResult.data?.user?.balance)
}

console.log('\n✨ Test completed!\n')

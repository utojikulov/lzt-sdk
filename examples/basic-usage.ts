import { LZTClient } from '../src/index.js'

const client = new LZTClient({
	token: 'YOUR_API_TOKEN_HERE',
	locale: 'en',
	intervalBetweenRequests: 3000,
})

async function main() {
	const searchResult = await client.market.search({
		pmin: 100,
		pmax: 500,
	})
	console.log('Search result:', searchResult.data)

	const { data, error } = await client.market.raw.GET('/steam', {
		params: {
			query: {
				pmin: 100,
				pmax: 500,
				order_by: 'price_to_up',
			},
		},
	})

	if (error) {
		console.error('Error:', error)
	} else {
		console.log('Steam accounts found:', data?.items?.length)
	}

	const userResult = await client.forum.getUser(123456)
	console.log('User:', userResult.data)

	const { data: threads, error: threadsError } = await client.forum.raw.GET(
		'/threads',
		{
			params: {
				query: {
					limit: 10,
				},
			},
		},
	)

	if (threadsError) {
		console.error('Error:', threadsError)
	} else {
		console.log('Threads found:', threads?.threads?.length)
	}
}

main().catch(console.error)

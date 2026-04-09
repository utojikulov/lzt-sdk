# LZT SDK

```typescript
import { LZTClient } from 'lzt-sdk'

const client = new LZTClient({
  token: 'YOUR_API_TOKEN',
  intervalBetweenRequests: 3000,
})

const item = await client.market.getItem('12345678', {
        parse_same_item_ids: true 
})
```

### Direct API Access (Recommended)

```typescript
// Market API
const { data, error } = await client.market.raw.GET('/steam', {
  params: { query: { /* ... */ } }
})

// Forum API
const { data, error } = await client.forum.raw.GET('/users/{user_id}', {
  params: { path: { user_id: 123456 } }
})
```

All parameters are fully typed based on the OpenAPI spec!

## Links

- [Market API Documentation](https://lzt-market.readme.io)
- [Forum API Documentation](https://lolzteam.readme.io)
- [Telegram Chat](https://t.me/lztmarket_api)

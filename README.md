# LZT SDK

```typescript
import { LZTClient } from 'lzt-sdk';

const client = new LZTClient({
  token: 'YOUR_API_TOKEN',
  intervalBetweenRequests: 3000,
});

// Option 1: Use convenience methods
const searchResult = await client.market.search({ pmin: 100, pmax: 500 });

// Option 2: Direct type-safe API access (RECOMMENDED)
const { data, error } = await client.market.raw.GET('/steam', {
  params: {
    query: {
      pmin: 100,
      pmax: 500,
      order_by: 'price_to_up'
    }
  }
});
```

### Direct API Access (Recommended)

```typescript
// Market API
const { data, error } = await client.market.raw.GET('/steam', {
  params: { query: { /* ... */ } }
});

// Forum API
const { data, error } = await client.forum.raw.GET('/users/{user_id}', {
  params: { path: { user_id: 123456 } }
});
```

All parameters are fully typed based on the OpenAPI spec!

## Rate Limiting

The SDK automatically queues requests to respect API rate limits:
- Market API: 120 req/min (0.5s delay recommended)
- Forum API: 300 req/min (0.2s delay recommended)

```typescript
const client = new LZTClient({
  token: 'YOUR_TOKEN',
  intervalBetweenRequests: 500, // milliseconds
});
```

## Error Handling

```typescript
const { data, error, response } = await client.market.raw.GET('/steam');

if (error) {
  console.error('API Error:', error);
  console.error('Status:', response.status);
} else {
  console.log('Success:', data);
}
```

## Links

- [Market API Documentation](https://lzt-market.readme.io)
- [Forum API Documentation](https://lolzteam.readme.io)
- [Telegram Chat](https://t.me/lztmarket_api)

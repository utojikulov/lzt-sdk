export interface LZTConfig {
	token: string
	locale?: string | undefined
	intervalBetweenRequests?: number | undefined
}

export interface RequestOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
	params?: Record<string, unknown>
	body?: Record<string, unknown>
	headers?: Record<string, string>
}

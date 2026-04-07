export interface HTTPClientConfig {
	baseURL: string
	token: string
	locale?: string | undefined
	intervalBetweenRequests: number
}

export interface QueuedRequest {
	url: string
	options: RequestInit
	resolve: (value: Response) => void
	reject: (reason: Error) => void
}

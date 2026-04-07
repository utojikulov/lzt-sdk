export interface APIResponse<T> {
	data?: T
	error?: string
	status?: string
}

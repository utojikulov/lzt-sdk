import { LZTError } from './lzt.error.js'

export class APIError extends LZTError {
	public statusCode?: number | undefined
	public responseData?: unknown | undefined

	constructor(message: string, statusCode?: number, responseData?: unknown) {
		super(message)
		this.name = 'APIError'
		this.statusCode = statusCode
		this.responseData = responseData
	}
}

export class LZTError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'LZTError'
	}
}

export class RateLimitError extends LZTError {
	constructor(message: string) {
		super(message)
		this.name = 'RateLimitError'
	}
}

export class ValidationError extends LZTError {
	constructor(message: string) {
		super(message)
		this.name = 'ValidationError'
	}
}

export class AuthError extends LZTError {
	constructor(message: string) {
		super(message)
		this.name = 'AuthError'
	}
}

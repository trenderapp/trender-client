export type error = {
    message: string,
    code: number
}

export type emptyResponse = {
    error?: error
}

export type paginationParams = {
    skip?: number | string,
    limit?: number | string
}
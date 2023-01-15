import type { error } from "./Global"

export interface affiliationFetchSchema {
    my_code?: string,
    affiliate_to?: string
}

export interface affiliationCreateResponse {
    error?: error,
    data?: {
        code: string
    }
}

export interface affiliationFetchResponse {
    error?: error,
    data?: affiliationFetchSchema
}
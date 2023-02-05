import type { error } from "./Global"

export interface fetchSessionsResponseSchema {
    session_id: string,
    device_name?: string;
    from?: {
      city?: string,
      country?: string
    };
    created_at?: Date;
}

export interface sessionFetchResponse {
    error?: error,
    data?: Array<fetchSessionsResponseSchema | []>
}
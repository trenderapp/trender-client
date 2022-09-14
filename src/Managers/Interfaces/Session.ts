import type { error } from "./Global"

type fetchSessionsResponseSchema = {
    session_id: string,
    device_name?: string;
    from?: {
      city?: string,
      country?: string
    };
    created_at?: Date;
}

export type sessionFetchResponse = {
    error?: error,
    data?: Array<fetchSessionsResponseSchema | []>
}
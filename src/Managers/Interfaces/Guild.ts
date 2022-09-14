import type { error } from "./Global"

type fetchGuildResponseSchema = {
    guild_id: string,
    created_at: Date,
    owner?: string,
    type: 0 | 1,
}

export type guildCreateResponse = {
    error?: error,
    data?: {
        guild_id: string,
        users: Array<string>
    }
}

export type guildFetchResponse = {
    error?: error,
    data?: Array<fetchGuildResponseSchema | []>
}
import type { error, premium_type } from "./Global";

export interface userInfo {
    username: string,
    nickname: string,
    avatar: string,
    accent_color: string,
    premium_type: premium_type,
    certified: boolean,
    flags: number,
    is_private: boolean,
    created_at: Date,
    user_id: string,
}

export interface fetchGuildResponseSchema {
    guild_id: string,
    created_at: string,
    owner?: string,
    type: 0 | 1,
    users: Array<userInfo>,
    last_message?: {
        content: string,
        created_at: string
    }
}

export interface guildCreateResponse {
    error?: error,
    data?: fetchGuildResponseSchema
}

export interface guildFetchResponse {
    error?: error,
    data?: Array<fetchGuildResponseSchema>
}
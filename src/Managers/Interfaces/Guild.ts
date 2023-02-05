import type { error } from "./Global";

export interface userInfo {
    username: string,
    nickname: string,
    avatar: string,
    accent_color: string,
    certified: boolean,
    flags: number,
    is_private: boolean,
    created_at: Date,
    user_id: string
}

export interface fetchGuildResponseSchema {
    guild_id: string,
    created_at: Date,
    owner?: string,
    type: 0 | 1,
    users: Array<userInfo | []>,
    last_message?: {
        content: string,
        created_at: Date
    }
}

export interface guildCreateReponseInterface {
    guild_id: string,
    users: Array<string>
}

export interface guildCreateResponse {
    error?: error,
    data?: guildCreateReponseInterface
}

export interface guildFetchResponse {
    error?: error,
    data?: Array<fetchGuildResponseSchema | []>
}
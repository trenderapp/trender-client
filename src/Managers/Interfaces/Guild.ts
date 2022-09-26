import type { error } from "./Global";

type userInfo = {
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

type fetchGuildResponseSchema = {
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
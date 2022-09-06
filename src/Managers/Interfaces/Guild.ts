import type { error } from "./Global"

type userSchema = {
    username: "Athénaïs_Renaud",
    nickname: "hzhzmjjxa04ei2z36",
    avatar: "base_2.png",
    accent_color: "#DCDCDC",
    certified: false,
    flags: 0,
    is_private: false,
    created_at: Date,
    user_id: string
}

type fetchGuildResponseSchema = {
    guild_id: string,
    created_at: Date,
    owner?: string,
    type: 0 | 1,
    users: Array<userSchema>
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
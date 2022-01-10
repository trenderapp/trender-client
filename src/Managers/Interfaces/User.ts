import type { error } from "./Global"

export type userInfo = {
    user_id: string,
    username: string,
    nickname: string,
    description: string,
    avatar: string,
    banner: string,
    accent_color: string,
    flags: number,
    is_private: boolean,
    allow_mp: boolean,
    created_at: Date
}

export type profileInformations = {
    error?: error,
    data?: {
        user_info: userInfo,
        subscriptions?: {
            total: number
        },
        subscribers?: {
            total: number
        }
    }
}
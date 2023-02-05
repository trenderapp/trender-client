import type { error } from "./Global"

export interface userInfo {
    user_id: string,
    username: string,
    nickname: string,
    description: string,
    avatar: string,
    banner: string,
    link?: string,
    accent_color: string,
    flags: number,
    is_private: boolean,
    allow_mp: boolean,
    pined_post?: string,
    created_at: Date
}

export interface profileInformationsInterface {
    user_info: userInfo,
    subscriptions?: {
        total: number
    },
    subscribers?: {
        total: number
    }
}

export interface profileInformations {
    error?: error,
    data?: profileInformationsInterface
}
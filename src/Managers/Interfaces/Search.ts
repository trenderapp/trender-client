import type { error } from "./Global"

export interface userInfo {
    user_id: string,
    username: string,
    nickname: string,
    description: string,
    avatar: string,
    flags: number,
    certified: boolean,
    created_at: string
}

export interface searchUsers {
    error?: error,
    data?: Array<userInfo>,
    pagination_key?: string
}
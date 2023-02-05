import type { error } from "./Global"

export interface userInfo {
    user_id: string,
    username: string,
    nickname: string,
    description: string,
    avatar: string,
    flags: number,
    certified: boolean
}

export interface searchUsers {
    error?: error,
    data?: Array<userInfo>
}

export interface searchUsersParams {
    query: string,
    skip?: number,
    limit?: number
}
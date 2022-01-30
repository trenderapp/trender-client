import type { error } from "./Global"

export type userInfo = {
    user_id: string,
    username: string,
    nickname: string,
    description: string,
    avatar: string,
    flags: number,
    certified: boolean
}

export type searchUsers = {
    error?: error,
    data?: Array<userInfo>
}

export type searchUsersParams = {
    query: string,
    skip?: number,
    limit?: number
}
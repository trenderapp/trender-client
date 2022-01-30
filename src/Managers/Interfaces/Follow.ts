import type { error } from "./Global"

export type followInformations = {
    error?: error
}

export type followListInformations = {
    error?: error,
    data?: Array<{
        follow_id: string, 
        user_id: string, 
        target_id: string, 
        created_at: Date, 
        accepted: boolean, 
        nickname: string, 
        username: string, 
        avatar: string, 
        is_private: boolean, 
        verified: boolean
    }>
}
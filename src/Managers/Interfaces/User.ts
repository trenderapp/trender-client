import type { error, premium_type } from "./Global";

export interface userInfo {
    user_id: string;
    username: string;
    nickname: string;
    description: string;
    premium_type: premium_type;
    avatar: string;
    banner: string;
    link?: string;
    accent_color: string;
    flags: number;
    is_private: boolean;
    allow_dm: boolean;
    pined_post?: string;
    created_at: Date;
    trust_factor: number;
    certified: boolean;
}

export interface profileInformationsInterface {
    user_info: userInfo;
    subscriptions?: {
        total: number;
    };
    subscribers?: {
        total: number;
    };
    following: boolean;
}

export interface profileInformations {
    error?: error;
    data?: profileInformationsInterface;
}
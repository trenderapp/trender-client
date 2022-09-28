import type LANGUAGES_LIST from "../../utils/ISO-369-1";
import type { attachments, error } from "./Global";

export type myInformations = {
    error?: error,
    data?: {
        user_id: string,
        nickname: string,
        avatar: string,
        token: string,
        locale: LANGUAGES_LIST
    }
}

export interface editInformationsParams {
    nickname?: string,
    username?: string,
    description?: string,
    is_private?: boolean,
    private_messages?: boolean,
    link?: string,
    avatar?: attachments,
    banner?: attachments
}

export type editInformationsResponse = {
    error?: error,
    data?: {
        is_private?: boolean,
        private_messages?: boolean,
        description?: string,
        nickname?: string,
        username?: string,
        avatar?: string,
        accent_color?: string,
        banner?: string
    }
}
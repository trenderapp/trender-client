import type * as ISO from "iso-639-1";
import type { attachments, error } from "./Global";

export type myInformations = {
    error?: error,
    data?: {
        user_id: string,
        nickname: string,
        avatar: string,
        token: string,
        locale: ISO.LanguageCode
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
    banner?: attachments,
    locale?: ISO.LanguageCode,
    language_spoken?: Array<ISO.LanguageCode>
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
        banner?: string,
        locale?: ISO.LanguageCode,
        language_spoken?: Array<ISO.LanguageCode>
    }
}
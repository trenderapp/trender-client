import type { attachments, error, premium_type } from "./Global";
import type { ISO_639_CODE_LIST } from "../../utils/ISO-369-1";

export interface myInformationInterface {
    user_id: string,
    nickname: string,
    premium_type: premium_type,
    avatar: string,
    token: string,
    locale: ISO_639_CODE_LIST
    session_id: string;
    username: string;
    nsfw_filter?: boolean;
    banner?: string;
    accent_color?: string;
}

export interface myInformations {
    error?: error,
    data?: myInformationInterface
}

export interface editInformationsParams {
    nickname?: string,
    username?: string,
    description?: string,
    is_private?: boolean,
    allow_dm?: boolean,
    link?: string,
    avatar?: attachments,
    banner?: attachments,
    locale?: ISO_639_CODE_LIST,
    language_spoken?: Array<ISO_639_CODE_LIST>,
    nsfw_filter?: boolean
}

export interface editInformationsResponseInterface {
    is_private?: boolean,
    allow_dm?: boolean,
    description?: string,
    nickname?: string,
    username?: string,
    avatar?: string,
    accent_color?: string,
    banner?: string,
    locale?: ISO_639_CODE_LIST,
    language_spoken?: Array<ISO_639_CODE_LIST>,
    nsfw_filter?: boolean
}

export interface editInformationsResponse {
    error?: error,
    data?: editInformationsResponseInterface
}
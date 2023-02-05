import type { attachments, error } from "./Global";
import type { ISO_639_CODE_LIST } from "../../utils/ISO-369-1";

export interface myInformationInterface {
    user_id: string,
    nickname: string,
    avatar: string,
    token: string,
    locale: ISO_639_CODE_LIST
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
    private_messages?: boolean,
    link?: string,
    avatar?: attachments,
    banner?: attachments,
    locale?: ISO_639_CODE_LIST,
    language_spoken?: Array<ISO_639_CODE_LIST>
}

export interface editInformationsResponseInterface {
    is_private?: boolean,
    private_messages?: boolean,
    description?: string,
    nickname?: string,
    username?: string,
    avatar?: string,
    accent_color?: string,
    banner?: string,
    locale?: ISO_639_CODE_LIST,
    language_spoken?: Array<ISO_639_CODE_LIST>
}

export interface editInformationsResponse {
    error?: error,
    data?: editInformationsResponseInterface
}
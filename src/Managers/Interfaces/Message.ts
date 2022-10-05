import type { error, attachments, embeds } from "./Global"

export type createParams = {
    content: string,
    attachments?: Array<attachments>
}

type userResponseInterface = {
    username: string,
    nickname: string,
    avatar: string,
    certified: boolean,
    is_private: boolean,
    user_id: string
}

type fetchGuildResponseSchema = {
    channel_id: string,
    content: string,
    attachments?: Array<attachments>,
    /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
    type: 0 | 1 | 2 | 3 | 4,
    embeds?: Array<embeds>,
    mentions?: Array<userResponseInterface>,
    hashtags?: Array<string>,
    message_id: string,
    created_at: Date,
    from: userResponseInterface
}

export type messageCreateResponse = {
    error?: error,
    data?: fetchGuildResponseSchema
}

export type messageFetchResponse = {
    error?: error,
    data?: Array<fetchGuildResponseSchema>
}

export type unreadFetchResponse = {
    error?: error,
    data?: Array<{
        /**
         * ID du dernier message lu
         */
        message_id: string,
        user_id: string,
        channel_id: string,
    } | []>
}
import type { error, attachments } from "./Global"

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

type fetchMuildResponseSchema = {
    channel_id: string,
    content: string,
    attachments?: Array<attachments>,
    message_id: string,
    created_at: Date,
    from: userResponseInterface
}

export type messageCreateResponse = {
    error?: error,
    data?: {
        attachments?: Array<attachments>,
        content: string,
        created_at: Date,
        from: userResponseInterface
    }
}

export type messageFetchResponse = {
    error?: error,
    data?: Array<fetchMuildResponseSchema | []>
}
import type { attachments, error } from "./Global"

export interface createPostParameters {
    request_id?: string,
    attached_post_id?: string,
    description: string,
    attachments?: Array<attachments>
}

export interface createPostReponse {
    error?: error,
    data?: {
        post_id: string,
        attached_post_id?: string,
        attachments?: Array<attachments>,
        description: string,
        type?: "video" | "image" | "audio",
        // poll?: pollInterface,
        // giveway?: givewayInterface,
        created_at: Date,
    }
}
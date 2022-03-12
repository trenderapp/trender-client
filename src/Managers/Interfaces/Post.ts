import type { attachments, embeds, error } from "./Global"

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
        embeds: Array<embeds>,
        description: string,
        /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
        type: 0 | 1 | 2 | 3 | 4,
        // poll?: pollInterface,
        // giveway?: givewayInterface,
        created_at: Date,
    }
}
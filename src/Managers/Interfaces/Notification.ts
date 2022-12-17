import type { error, notificationTypeInterface, userInfo } from "./Global";
import type { postResponseSchema } from "./Post";

interface notificationFetchResponseSchema {
    user_id: string,
    target_id: string,
    post_id: string,
    notification_type: notificationTypeInterface,
    notification_id: string,
    created_at: Date,
    read: boolean,
    post: postResponseSchema,
    from: userInfo,
    mentions: userInfo[] | []
}

export interface notificationFetchResponse {
    error?: error,
    data?: Array<notificationFetchResponseSchema>
}
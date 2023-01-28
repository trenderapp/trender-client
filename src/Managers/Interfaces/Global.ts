export type error = {
    message: string,
    code: number
}

export type notificationTypeInterface = "likes" | "mentions" | "follows";

export type attachments = {
    height?: number,
    width?: number,
    id: string,
    name: string,
    size: number,
    nsfw: boolean,
    thumbnail: string,
    mimetype: string,
    created_at: Date
}

export type userInfo = {
    user_id: string,
    nickname: string,
    username: string,
    is_private: boolean,
    avatar: string,
    flags: number,
    description: string,
    certified: boolean,
    banner: string,
    accent_color: string,
    allow_mp: boolean,
    created_at: string,
    link: string
}

export type embeds = {
    /**0 = text only | 1 = image (include gif) | 2 = video 
     * @default 0
    */
    type?: 0 | 1 | 2 | 3,
    icon_url?: string,
    url?: string,
    title?: string,
    description?: string,
    color?: string,
    attachments?: string
}

export type emptyResponse = {
    error?: error
}

export type successResponse = {
    error?: error,
    data?: {
        message: string,
        code: 200
    }
}

export type paginationParams = {
    skip?: number | string,
    limit?: number | string
}

export type uploadFiles = {
    error?: error,
    data?: {
        request_id: string,
        /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
        type: 0 | 1 | 2 | 3 | 4,
        attachments: Array<attachments>
    }
}

export interface pollInterface {
    poll_id: string,
    time: {
      days: number,
      hours: number,
      minutes: number
    },
    options: Array<{
        name: string;
        option_id: string
    }>
}
  

export interface givewayInterface {
    follow: Array<string>;
    sub: boolean;
    like: boolean;
    comment: boolean;
    share: boolean;
    paid: boolean;
}
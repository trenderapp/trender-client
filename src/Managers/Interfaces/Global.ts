export interface error {
    message: string,
    code: number
}

export type notificationTypeInterface = "likes" | "mentions" | "follows";

export interface attachments {
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

export interface userInfo {
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

export interface embeds {
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

export interface emptyResponse {
    error?: error
}

export interface successReponseInterface {
    message: string,
    code: 200
}

export interface successResponse {
    error?: error,
    data?: successReponseInterface
}

export interface paginationParams {
    skip?: number | string,
    limit?: number | string
}

export interface uploadFilesResponse {
    request_id: string,
    /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
    type: 0 | 1 | 2 | 3 | 4,
    attachments: Array<attachments>
}

export interface uploadFiles {
    error?: error,
    data?: uploadFilesResponse
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
    }> | []
}
  

export interface givewayInterface {
    follow: Array<string>;
    sub: boolean;
    like: boolean;
    comment: boolean;
    share: boolean;
    paid: boolean;
}
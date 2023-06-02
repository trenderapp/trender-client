export interface error {
    message: string,
    code: number
}

export type notificationTypeInterface = "likes" | "mentions" | "follows";

/**
*  0 = none | 1 = normal (2.99€) | 2 = shared with others projects (4.99€) | 3 = premium 1 + 2 (7.99€)
*/
export type premium_type = 0 | 1 | 2 | 3;

export interface attachments {
    height?: number;
    width?: number;
    id: string;
    name: string;
    size: number;
    mimetype: string;
    created_at: Date;
    nsfw: boolean;
    thumbnail?: string;
    accent_color?: string;
    non_animated?: string;
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
    allow_dm: boolean,
    created_at: string,
    link: string;
    pined_post?: string;
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
    pagination_key?: string,
    skip?: number,
    limit?: number
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
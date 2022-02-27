export type error = {
    message: string,
    code: number
}

export type attachments = {
    id: string,
    name: string,
    size: number,
    created_at: string
}

export type emptyResponse = {
    error?: error
}

export type paginationParams = {
    skip?: number | string,
    limit?: number | string
}

export type uploadFiles = {
    error?: error,
    data?: {
        request_id: string,
        type: string,
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
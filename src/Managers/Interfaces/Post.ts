import type { attachments, embeds, error, givewayInterface, pollInterface, userInfo } from "./Global"

export interface createPostParameters {
    request_id?: string,
    /**
     * Use it to create a comment
     */
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
        created_at: Date
    }
}

export interface postResponseSchema {
  post_id?: string,
  user_id?: string,
  attached_post_id?: string,
  attachments?: Array<attachments>,
  description: string,
  embeds?: Array<embeds>,
  /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
  type: 0 | 1 | 2 | 3 | 4,
  poll?: {
    poll_id: string,
    time: {
      days: number,
      hours: number,
      minutes: number,
    },
    options: Array<pollInterface>,
  };
  giveway?: givewayInterface,
  created_at?: Date,
  from: userInfo,
  likes: number,
  liked: number,
  comments: number
}

export interface postResponse {
  error?: error,
  data?: Array<postResponseSchema>
}

export interface postInterface {
    post_id?: string,
    user_id?: string,
    attached_post_id?: string,
    attachments?: Array<attachments>,
    description: string,
    embeds?: Array<embeds>,
    /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio | 4 = others */
    type: 0 | 1 | 2 | 3 | 4,
    poll?: {
      poll_id: string,
      time: {
        days: number,
        hours: number,
        minutes: number,
      },
      options: Array<pollInterface>,
    };
    giveway?: givewayInterface,
    created_at?: Date,
    likes: number,
    comments: number
}
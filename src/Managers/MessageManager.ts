import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { paginationParams } from './Interfaces/Global';
import type { createParams, messageCreateResponse, messageFetchResponse } from './Interfaces/Message';

class MessageManager extends RequestEmitter {

    constructor(params: requestParams) {
      super(params);
    }

  public async create(channel_id: string, params: createParams) {
    const request = await this.postRequest(`/messages/${channel_id}`, {
      attachments: params?.attachments,
      content: params.content
    });

    const response = request as messageCreateResponse;
    return response;
  }


  public async fetch(channel_id: string, options?: paginationParams) {
    const request = await this.getRequest(`/messages/${channel_id}?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 50}`);

    const response = request as messageFetchResponse;

    return response;
  }
}

export default MessageManager;

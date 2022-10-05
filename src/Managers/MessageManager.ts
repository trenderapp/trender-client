import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { paginationParams, successResponse } from './Interfaces/Global';
import type { createParams, messageCreateResponse, messageFetchResponse, unreadFetchResponse } from './Interfaces/Message';

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

  public async unreads() {
    const request = await this.getRequest(`/messages/unreads`);

    const response = request as unreadFetchResponse;

    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/messages/${target_id}/reports`, {
        reason: reason,
        description: description
    });
    const response = request as successResponse;

    return response;
  }
}

export default MessageManager;

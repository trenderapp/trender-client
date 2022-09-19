import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
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


  public async fetch(channel_id: string) {
    const request = await this.getRequest(`/messages/${channel_id}`);

    const response = request as messageFetchResponse;

    return response;
  }
}

export default MessageManager;

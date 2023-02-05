import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface, MessageInterface } from './Interfaces';

class MessageManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async create(channel_id: string, params: MessageInterface.createParams) {
    const request = await this.postRequest(`/messages/${channel_id}`, {
      attachments: params?.attachments,
      content: params.content
    });

    const response = request as MessageInterface.messageCreateResponse;
    return response;
  }

  public async fetch(channel_id: string, options?: GlobalInterface.paginationParams) {
    const request = await this.getRequest(
      `/messages/${channel_id}?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 50}`
    );

    const response = request as MessageInterface.messageFetchResponse;

    return response;
  }

  public async unreads() {
    const request = await this.getRequest(`/messages/unreads`);

    const response = request as MessageInterface.unreadFetchResponse;

    return response;
  }

  public async read(channel_id: string, message_id: string) {
    const request = await this.postRequest(`/messages/${channel_id}/${message_id}`);

    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async delete(channel_id: string, message_id: string) {
    const request = await this.deleteRequest(`/messages/${channel_id}/${message_id}`);

    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/messages/${target_id}/reports`, {
      reason: reason,
      description: description
    });
    const response = request as GlobalInterface.successResponse;

    return response;
  }
}

export default MessageManager;

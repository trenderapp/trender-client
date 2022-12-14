import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { paginationParams } from './Interfaces/Global';
import type { postResponse } from './Interfaces/Post';

class NotificationManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async mentions(params?: paginationParams) {
    const request = await this.postRequest(`/notifications/mentions`, params);
    const response = request as postResponse;

    return response;
  }

  public async likes(params?: paginationParams) {
    const request = await this.postRequest(`/notifications/likes`, params);
    const response = request as postResponse;

    return response;
  }
}

export default NotificationManager;

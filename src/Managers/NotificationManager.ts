import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { paginationParams, successResponse } from './Interfaces/Global';
import type { notificationFetchResponse } from './Interfaces/Notification';

class NotificationManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async fetch(params?: paginationParams) {
    const request = await this.getRequest(`/notifications?skip=${params?.skip ?? 0}&limit=${params?.limit ?? 20}`);
    const response = request as notificationFetchResponse;

    return response;
  }

  public async read(notification_id: string) {
    const request = await this.postRequest(`/notifications`, {
      notification_id: notification_id
    });
    const response = request as successResponse;

    return response;
  }
}

export default NotificationManager;

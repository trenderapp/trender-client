import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface, NotificationInterface } from './Interfaces';

class NotificationManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async fetch(params?: GlobalInterface.paginationParams) {
    const request = await this.getRequest(`/notifications?skip=${params?.skip ?? 0}&limit=${params?.limit ?? 20}`);
    const response = request as NotificationInterface.notificationFetchResponse;

    return response;
  }

  public async read(notification_id: string) {
    const request = await this.postRequest(`/notifications`, {
      notification_id: notification_id
    });
    const response = request as GlobalInterface.successResponse;

    return response;
  }
}

export default NotificationManager;

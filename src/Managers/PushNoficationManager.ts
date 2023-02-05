import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface } from './Interfaces';

class PushNoficationManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async register(fcmToken: string) {
    const request = await this.postRequest(`/notifications/push`, {
      fcmToken: fcmToken
    });
    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async delete(fcmToken: string) {
    const request = await this.deleteRequest(`/notifications/push`, {
      fcmToken: fcmToken
    });
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }
}

export default PushNoficationManager;

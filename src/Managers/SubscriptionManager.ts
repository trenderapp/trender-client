import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import CustomSubscriptionManager from './CustomSubscriptionManager';
import type { SubscriptionInterface } from './Interfaces';

class SubscriptionManager extends RequestEmitter {
  public custom: CustomSubscriptionManager;

  constructor(params: requestParams) {
    super(params);
    
    this.custom = new CustomSubscriptionManager(params);
  }

  public async dashboard(user_id: string) {
    const request = await this.getRequest(`/subscriptions/${user_id}/dashboard`);

    const response = request as SubscriptionInterface.createDashboardResponse;
    return response;
  }

  public async fetch() {
    const request = await this.getRequest(`/sessions`);

    const response = request as SubscriptionInterface.getSubscriptionsResponse;

    return response;
  }
}

export default SubscriptionManager;

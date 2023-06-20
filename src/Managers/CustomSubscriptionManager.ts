import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { CustomSubscriptionInterface } from './Interfaces';

class CustomSubscriptionManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }


  public async subscribers() {
    const request = await this.postRequest(`/subscriptions/custom`);

    const response = request as CustomSubscriptionInterface.getUserActiveSubscriptionInterfaceResponse;
    return response;
  }

  public async subscriptions() {
    const request = await this.postRequest(`/subscriptions/custom`);

    const response = request as CustomSubscriptionInterface.getUserActiveSubscriptionInterfaceResponse;
    return response;
  }

  public async createAndUpdate(params: CustomSubscriptionInterface.createCustomerSubscriptionParamsInterface) {

    const request = await this.postRequest(`/subscriptions/custom`, params);

    const response = request as CustomSubscriptionInterface.getUserSubscriptionsResponse;
    return response;
  }

  public async fetch(user_id: string) {
    const request = await this.getRequest(`/subscriptions/custom/${user_id}`);

    const response = request as CustomSubscriptionInterface.getUserSubscriptionsResponse;

    return response;
  }
}

export default CustomSubscriptionManager;

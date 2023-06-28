import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { CustomSubscriptionInterface } from './Interfaces';

class CustomSubscriptionManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  /**
   * 
   * Check if the current account can create custom subscription
   */
  public async isActive() {
    const request = await this.getRequest(`/subscriptions/custom/me/active`);

    const response = request as CustomSubscriptionInterface.getUserActiveCustomSubscriptionInterfaceResponse;
    return response;
  }

  public async register() {
    const request = await this.postRequest(`/subscriptions/custom/me/register`);

    const response = request as CustomSubscriptionInterface.getUserConnectRegisterLinkResponse;
    return response;
  }

  public async dashboard() {
    const request = await this.getRequest(`/subscriptions/custom/me/link`);

    const response = request as CustomSubscriptionInterface.getUserConnectDashboarLinkResponse;
    return response;
  }

  /**  
   * Get current user active subscriptions
   */
  public async list() {
    const request = await this.getRequest(`/subscriptions/custom`);
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

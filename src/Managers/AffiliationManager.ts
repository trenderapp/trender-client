import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { AffiliationInterface } from './Interfaces';
import type { emptyResponse, successResponse } from './Interfaces/Global';

class AffiliationManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async set(code: string) {
    const request = await this.postRequest(`/affiliation/set/${code}`);
    const response = request as successResponse;

    return response;
  }

  public async generate() {
    const request = await this.postRequest(`/affiliation`);
    const response = request as AffiliationInterface.affiliationCreateResponse;

    return response;
  }

  public async delete() {
    const request = await this.deleteRequest(`/affiliation`);
    const response = request as emptyResponse;

    return response;
  }

  public async fetch() {
    const request = await this.getRequest(`/affiliation`);
    const response = request as AffiliationInterface.affiliationFetchResponse;

    return response;
  }
}

export default AffiliationManager;

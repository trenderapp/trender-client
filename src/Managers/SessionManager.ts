import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { emptyResponse, successResponse } from './Interfaces/Global';
import type { sessionFetchResponse } from './Interfaces/Session';

class SessionManager extends RequestEmitter {

    constructor(params: requestParams) {
      super(params);
    }

  public async deleteOne(session_id: string, params: { password: string }) {
    const request = await this.deleteRequest(`/sessions/${session_id}`, {
      password: params.password
    });

    const response = request as successResponse;
    return response;
  }

  public async deleteAll(password: string) {
    const request = await this.deleteRequest(`/sessions`, {
      password: password
    });

    const response = request as emptyResponse;
    return response;
  }


  public async fetch() {
    const request = await this.getRequest(`/sessions`)

    const response = request as sessionFetchResponse;

    return response;
  }
}

export default SessionManager;

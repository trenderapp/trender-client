import RequestEmitter from '../utils/RequestEmitter';
import type { blockUserReponse } from './Interfaces/Block';
import type { emptyResponse } from './Interfaces/Global';

class BlockManager extends RequestEmitter {

  constructor(token: string) {
    super(token);
  }

  public async create(target_id: string) {
    const request = await this.postRequest(`/users/${target_id}/block`, {});
    const response = request as emptyResponse;

    return response;
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/users/${target_id}/block`);
    const response = request as emptyResponse;

    return response;
  }

  public async fetch() {
    const request = await this.getRequest(`/users/me/block`);
    const response = request as blockUserReponse;

    return response;
  }
}

export default BlockManager;

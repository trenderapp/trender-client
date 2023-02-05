import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { BlockInterface, GlobalInterface } from './Interfaces';

class BlockManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async create(target_id: string) {
    const request = await this.postRequest(`/users/${target_id}/block`, {});
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/users/${target_id}/block`);
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }

  public async fetch() {
    const request = await this.getRequest(`/users/me/block`);
    const response = request as BlockInterface.blockUserReponse;

    return response;
  }
}

export default BlockManager;

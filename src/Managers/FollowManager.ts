import EventEmitter from '../utils/RequestEmitter';
import type { followInformations, followListInformations } from './Interfaces/Follow';

class FollowManager extends EventEmitter {
  constructor(token: string) {
    super(token);
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/users/${target_id}/follows`);
    const response = request as followInformations;

    return response;
  }

  public async create(target_id: string) {
    const request = await this.postRequest(`/users/${target_id}/follows`, {});
    const response = request as followInformations;

    return response;
  }

  public async accept(follow_id: string) {
    const request = await this.putRequest(`/follows/accept`, {
      follow_id: follow_id
    });
    
    const response = request as followInformations;

    return response;
  }

  public async unacceptedList() {
    const request = await this.getRequest("/users/me/follows");

    const response = request as followListInformations;

    return response;
  }
}

export default FollowManager;

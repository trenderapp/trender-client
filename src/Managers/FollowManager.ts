import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { FollowInterface, GlobalInterface } from './Interfaces';

class FollowManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/users/${target_id}/follows`);
    const response = request as FollowInterface.followInformations;

    return response;
  }

  public async create(target_id: string) {
    const request = await this.postRequest(`/users/${target_id}/follows`, {});
    const response = request as FollowInterface.followInformations;

    return response;
  }

  public async accept(follow_id: string) {
    const request = await this.putRequest(`/follows/accept`, {
      follow_id: follow_id
    });

    const response = request as FollowInterface.followInformations;

    return response;
  }

  public async unacceptedList() {
    const request = await this.getRequest('/users/me/follows');

    const response = request as FollowInterface.followListInformations;

    return response;
  }

  public async follows(nickname: string, params?: GlobalInterface.paginationParams) {

    let _url = `/users/${nickname}/follows`;
    const parameters = [];

    if(params?.pagination_key) parameters.push(`pagination_key=${params.pagination_key}`);
    if(parameters.length > 0) _url = _url.concat("?")

    const request = await this.getRequest(_url.concat(parameters.join("&")));

    const response = request as FollowInterface.followListInformations;

    return response;
  }

  public async followers(nickname: string, params?: GlobalInterface.paginationParams) {

    let _url = `/users/${nickname}/followers`;
    const parameters = [];

    if(params?.pagination_key) parameters.push(`pagination_key=${params.pagination_key}`);
    if(parameters.length > 0) _url = _url.concat("?")

    const request = await this.getRequest(_url.concat(parameters.join("&")));

    const response = request as FollowInterface.followListInformations;

    return response;
  }
}

export default FollowManager;

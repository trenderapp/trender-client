import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface, PostInterface } from './Interfaces';

class PostUserManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async fetch(nickname: string, options?: GlobalInterface.paginationParams) {
    const request = await this.getRequest(
      `/users/${nickname}/posts?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`
    );

    const response = request as PostInterface.postResponse;

    return response;
  }
}

export default PostUserManager;

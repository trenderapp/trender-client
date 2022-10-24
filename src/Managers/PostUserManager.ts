import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { paginationParams } from './Interfaces/Global';
import type { postResponse } from './Interfaces/Post';

class PostUserManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async fetch(nickname: string, options?: paginationParams) {
    const request = await this.getRequest(
      `/users/${nickname}/posts?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`
    );

    const response = request as postResponse;

    return response;
  }
}

export default PostUserManager;

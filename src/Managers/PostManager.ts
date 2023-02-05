import { cdnsiteurl } from '../utils/Constante';
import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface, PostInterface, SearchInterface } from './Interfaces';
import PostUserManager from './PostUserManager';

class PostManager extends RequestEmitter {
  public user: PostUserManager;
  private cdnurl: string;

  constructor(params: requestParams) {
    super(params);

    this.user = new PostUserManager(params);
    this.cdnurl = params?.cdnurl ?? cdnsiteurl;
  }

  public file(user_id: string, post_id: string, file_name: string) {
    return `${this.cdnurl}/posts/${user_id}/${post_id}/${file_name}`;
  }

  public async uploadFile(files: Blob) {
    const formdata = new FormData();

    formdata.append('posts', files);

    const request = await this.uploadFiles(`/upload?type=posts`, formdata);
    const response = request as GlobalInterface.uploadFiles;

    return response;
  }

  public async create(options: PostInterface.createPostParameters) {
    const request = await this.postRequest(`/posts`, options);
    const response = request as PostInterface.createPostReponse;

    return response;
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}`);
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }

  public async unPin(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}/pin`);
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }

  public async pin(target_id: string) {
    const request = await this.postRequest(`/posts/${target_id}/pin`, {});
    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async getPinPost(target_id: string) {
    const request = await this.getRequest(`/posts/${target_id}/pin`);
    const response = request as PostInterface.pinedPostResponse;

    return response;
  }

  public async like(target_id: string) {
    const request = await this.postRequest(`/posts/${target_id}/likes`, {});
    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async unlike(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}/likes`);
    const response = request as GlobalInterface.emptyResponse;

    return response;
  }

  public async getLikesPost(target_id: string) {
    const request = await this.getRequest(`/posts/${target_id}/likes`);
    const response = request as SearchInterface.searchUsers;

    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/posts/${target_id}/reports`, {
      reason: reason,
      description: description
    });
    const response = request as GlobalInterface.successResponse;

    return response;
  }

  public async fetchOne(post_id: string) {
    const request = await this.getRequest(`/posts/${post_id}`);

    const response = request as PostInterface.postResponseSchema;

    return response;
  }

  public async comments(post_id: string, options?: GlobalInterface.paginationParams) {
    const request = await this.getRequest(
      `/posts/${post_id}/comments?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`
    );

    const response = request as PostInterface.postResponse;

    return response;
  }

  public async fetch(options?: GlobalInterface.paginationParams) {
    const request = await this.getRequest(`/posts?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`);

    const response = request as PostInterface.postResponse;

    return response;
  }
}

export default PostManager;

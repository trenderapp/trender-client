import { cdnsiteurl } from '../utils/Constante';
import RequestEmitter from '../utils/RequestEmitter';
import type { emptyResponse, paginationParams, successResponse, uploadFiles } from './Interfaces/Global';
import type { createPostParameters, createPostReponse, pinedPostResponse, postResponse, postResponseSchema } from './Interfaces/Post';
import type { searchUsers } from './Interfaces/Search';
import PostUserManager from './PostUserManager';

class PostManager extends RequestEmitter {
  public user: PostUserManager;

  constructor(token: string) {
    super(token);

    this.user = new PostUserManager(token);
  }

  public file(user_id: string, post_id: string, file_name: string) {
    return `${cdnsiteurl}/posts/${user_id}/${post_id}/${file_name}`
  }

  public async uploadFile(files: Blob) {
    const formdata = new FormData();

    formdata.append("posts", files);

    const request = await this.uploadFiles(`/upload?type=posts`, formdata);
    const response = request as uploadFiles;

    return response;
  }

  public async create(options: createPostParameters) {
    const request = await this.postRequest(`/posts`, options)
    const response = request as createPostReponse;

    return response;
  }

  public async delete(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}`);
    const response = request as emptyResponse;

    return response;
  }

  public async unPin(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}/pin`);
    const response = request as emptyResponse;

    return response;
  }

  public async pin(target_id: string) {
    const request = await this.postRequest(`/posts/${target_id}/pin`, {});
    const response = request as successResponse;

    return response;
  }

  public async getPinPost(target_id: string) {
    const request = await this.getRequest(`/posts/${target_id}/pin`);
    const response = request as pinedPostResponse;

    return response;
  }

  public async like(target_id: string) {
    const request = await this.postRequest(`/posts/${target_id}/likes`, {});
    const response = request as successResponse;

    return response;
  }

  public async unlike(target_id: string) {
    const request = await this.deleteRequest(`/posts/${target_id}/likes`);
    const response = request as emptyResponse;

    return response;
  }

  public async getLikesPost(target_id: string) {
    const request = await this.getRequest(`/posts/${target_id}/likes`);
    const response = request as searchUsers;

    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/posts/${target_id}/reports`, {
        reason: reason,
        description: description
    });
    const response = request as successResponse;

    return response;
  }

  public async fetchOne(post_id: string) {
    const request = await this.getRequest(`/posts/${post_id}`);

    const response = request as postResponseSchema;
    
    return response;
  }

  public async comments(post_id: string, options?: paginationParams) {
    const request = await this.getRequest(`/posts/${post_id}/comments?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`);

    const response = request as postResponseSchema;
    
    return response;
  }

  public async fetch(options?: paginationParams) {
    const request = await this.getRequest(`/posts?skip=${options?.skip ?? 0}&limit=${options?.limit ?? 30}`);

    const response = request as postResponse;
    
    return response;
  }
}

export default PostManager;

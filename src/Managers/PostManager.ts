import { cdnsiteurl } from '../utils/Constante';
import RequestEmitter from '../utils/RequestEmitter';
import type { emptyResponse, uploadFiles } from './Interfaces/Global';
import type { createPostParameters, createPostReponse } from './Interfaces/Post';
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

  public async fetch(user_id: string) {
    
    return user_id;
  }
}

export default PostManager;

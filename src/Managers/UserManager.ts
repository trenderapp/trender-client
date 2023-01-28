import UserPermissions from '../Permissions/UserPermissions';
import { cdnsiteurl } from '../utils/Constante';
import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import BlockManager from './BlockManager';
import FollowManager from './FollowManager';
import type { successResponse, uploadFiles } from './Interfaces/Global';
import type { editInformationsParams, editInformationsResponse } from './Interfaces/Me';
import type { searchUsers, searchUsersParams } from './Interfaces/Search';
import type { profileInformations } from './Interfaces/User';

class UserManager extends RequestEmitter {
  public block: BlockManager;
  public follow: FollowManager;
  private cdnurl: string;

  constructor(params: requestParams) {
    super(params);

    this.follow = new FollowManager(params);
    this.block = new BlockManager(params);
    this.cdnurl = params?.cdnurl ?? cdnsiteurl;
  }

  public flags(bits?: string) {
    return new UserPermissions(bits);
  }

  public avatar(user_id: string, avatar: string) {
    if (avatar === 'base_1.png' || avatar === 'base_2.png') return `${this.cdnurl}/profile_avatars/${avatar}`;
    return `${this.cdnurl}/profile_avatars/${user_id}/${avatar}`;
  }

  public banner(user_id: string, banner: string) {
    return `${this.cdnurl}/profile_banners/${user_id}/${banner}`;
  }

  public badge(flag_name: string) {
    return `${this.cdnurl}/assets/badges/${flag_name}.png`;
  }

  public async profile(nickname: string) {
    const request = await this.getRequest(`/users/${nickname}`);

    const response = request as profileInformations;
    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/users/${target_id}/reports`, {
      reason: reason,
      description: description
    });

    const response = request as successResponse;
    return response;
  }

  public async search(query: string, params?: searchUsersParams) {
    const request = await this.getRequest(
      `/users/search/all?query=${query}&skip=${params?.skip ?? 0}&limit=${params?.limit ?? 30}`
    );
    const response = request as searchUsers;

    return response;
  }

  // Update your account

  public async uploadAvatar(files: Blob) {
    const formdata = new FormData();

    formdata.append('avatar', files);

    const request = await this.uploadFiles(`/upload?type=avatar`, formdata);
    const response = request as uploadFiles;

    return response;
  }

  public async uploadBanner(files: Blob) {
    const formdata = new FormData();

    formdata.append('banner', files);

    const request = await this.uploadFiles(`/upload?type=banner`, formdata);
    const response = request as uploadFiles;

    return response;
  }

  public async edit(options: editInformationsParams) {
    const request = await this.patchRequest(`/users/me`, options);

    const response = request as editInformationsResponse;

    return response;
  }

  public async logout() {
    const request = await this.postRequest(`/logout`);

    const response = request as successResponse;

    return response;
  }
}

export default UserManager;

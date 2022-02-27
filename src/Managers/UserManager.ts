import UserPermissions from '../Permissions/UserPermissions';
import { cdnsiteurl } from '../utils/Constante';
import RequestEmitter from '../utils/RequestEmitter';
import BlockManager from './BlockManager';
import FollowManager from './FollowManager';
import type { emptyResponse } from './Interfaces/Global';
import type { editInformationsParams, editInformationsResponse } from './Interfaces/Me';
import type { searchUsers, searchUsersParams } from './Interfaces/Search';
import type { profileInformations } from './Interfaces/User';

class UserManager extends RequestEmitter {
    public block: BlockManager;
    public follow: FollowManager;

    constructor(token: string) {
    super(token);

    this.follow = new FollowManager(token);
    this.block = new BlockManager(token);
  }

  public flags(bits?: string) {
    return new UserPermissions(bits);
  }

  public avatar(user_id: string, avatar: string) {
    if (avatar === 'base_1.png' || avatar === 'base_2.png') return `${cdnsiteurl}/profile_avatars/${avatar}`;
    return `${cdnsiteurl}/profile_avatars/${user_id}/${avatar}`;
  }

  public banner(user_id: string, banner: string) {
    return `${cdnsiteurl}/profile_banners/${user_id}/${banner}`;
  }

  public badge(flag_name: string) {
    return `${cdnsiteurl}/assets/badges/${flag_name}.png`;
  }
  
  public async profile(nickname: string) {
    const request = await this.getRequest(`/users/${nickname}`);

    const response = request as profileInformations;
    return response;
  }

  public async report(target_id: string, reason: number, description?: string) {
    const request = await this.postRequest(`/users/${target_id}/report`, {
        reason: reason,
        description: description
    });

    const response = request as emptyResponse;
    return response;
  }

  public async search(query: string, params?: searchUsersParams) {
    const request = await this.getRequest(`/users/search/all?query=${query}&skip=${params?.skip ?? 0}&limit=${params?.limit ?? 30}`);
    const response = request as searchUsers;

    return response;
  }

  /**
   * Update your account
   */
  public async edit(options: editInformationsParams) {
    
    const formdata = new FormData();

    formdata.append("avatar", options?.avatar ? options.avatar : "false")
    formdata.append("banner", options?.banner ? options.banner : "false")
    formdata.append("is_private", options.is_private.toString())
    formdata.append("description", options.description)
    formdata.append("link", options?.link ?? "")
    formdata.append("nickname", options.nickname)
    formdata.append("username", options.username)

    const request = await this.patchRequest(`/users/me`, formdata, {
      headers: {
      'content-type': 'multipart/form-data'
      }
    })

    const response = request as editInformationsResponse;

    return response;
  }
}

export default UserManager;

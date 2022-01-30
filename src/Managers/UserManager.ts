import UserPermissions from '../Permissions/UserPermissions';
import { cdnsiteurl } from '../utils/Constante';
import EventEmitter from '../utils/RequestEmitter';
import BlockManager from './BlockManager';
import FollowManager from './FollowManager';
import type { emptyResponse } from './Interfaces/Global';
import type { editInformationsParams } from './Interfaces/Me';
import type { searchUsers, searchUsersParams } from './Interfaces/Search';
import type { profileInformations } from './Interfaces/User';

class UserManager extends EventEmitter {
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
    if (avatar === 'base_1.png' || avatar === 'base_2.png') return `${cdnsiteurl}/avatars/${avatar}`;
    return `${cdnsiteurl}/avatars/${user_id}/${avatar}`;
  }

  public banner(user_id: string, banner: string) {
    return `${cdnsiteurl}/banners/${user_id}/${banner}`;
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

  public async search(params: searchUsersParams) {
    const request = await this.getRequest(`/users/search/all?query=${params.query}&skip=${params?.skip ?? 0}&limit=${params?.limit ?? 25}`);
    const response = request as searchUsers;

    return response;
  }

  /**
   * Update your account
   */
  public async edit(options: editInformationsParams) {
    return options;
  }
}

export default UserManager;

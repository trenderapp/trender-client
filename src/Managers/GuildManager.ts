import RequestEmitter, { requestParams } from '../utils/RequestEmitter';
import type { GlobalInterface, GuildInterface } from './Interfaces';

class GuildManager extends RequestEmitter {
  constructor(params: requestParams) {
    super(params);
  }

  public async create(users: Array<string>) {
    const request = await this.postRequest(`/direct_messages/open`, {
      users: users
    });

    const response = request as GuildInterface.guildCreateResponse;
    return response;
  }

  public async leave(guild_id: string) {
    const request = await this.deleteRequest(`/direct_messages/${guild_id}`);

    const response = request as GlobalInterface.emptyResponse;
    return response;
  }

  public async fetch() {
    const request = await this.getRequest(`/users/me/direct_messages`);

    const response = request as GuildInterface.guildFetchResponse;

    return response;
  }
}

export default GuildManager;

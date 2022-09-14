import GuildManager from './Managers/GuildManager';
import PostManager from './Managers/PostManager';
import SessionManager from './Managers/SessionManager';
import UserManager from './Managers/UserManager';
import UserFlags from './Permissions/Flags';
import RequestEmitter, { requestParams } from './utils/RequestEmitter';
import type { myInformations } from './Managers/Interfaces/Me';

export const userFlags = UserFlags;

class Client extends RequestEmitter {
    
    public user: UserManager;
    public post: PostManager;
    public guild: GuildManager;
    public session: SessionManager;
    
    constructor(params: requestParams) {
        super(params);

        this.user = new UserManager(params);
        this.post = new PostManager(params);
        this.guild = new GuildManager(params);
        this.session = new SessionManager(params);
    }

    public async informations() {
        const request = await this.getRequest("/users/me/informations");

        const response = request as myInformations;

        return response;
    }

}
  
  export default Client;
import type { myInformations } from './Managers/Interfaces/Me';
import PostManager from './Managers/PostManager';
import UserManager from './Managers/UserManager';
import UserFlags from './Permissions/Flags';
import RequestEmitter from './utils/RequestEmitter';

export const userFlags = UserFlags;

class Client extends RequestEmitter {
    
    public user: UserManager;
    public post: PostManager;

    constructor(token: string) {
        super(token);

        this.user = new UserManager(token);
        this.post = new PostManager(token);
    }

    public async informations() {
        const request = await this.getRequest("/users/me/informations");

        const response = request as myInformations;

        return response;
    }

}
  
  export default Client;
import type { myInformations } from './Managers/Interfaces/Me';
import UserManager from './Managers/UserManager';
import RequestEmitter from './utils/RequestEmitter';

class Client extends RequestEmitter {
    
    public user: UserManager;

    constructor(token: string) {
        super(token);
    
        this.user = new UserManager(token);
    }

    public async informations() {
        const request = await this.getRequest("/users/me/informations");

        const response = request as myInformations;

        return response;
    }

}
  
  export default Client;
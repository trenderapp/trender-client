import type { myInformations } from './Managers/Interfaces/Me';
import EventEmitter from './utils/EventEmitter';

class Client extends EventEmitter {
 
    constructor(token: string) {
        super(token);
    }

    public async informations() {
        const request = await this.getRequest("/users/me/informations");
        const response = request as myInformations;

        return response.data;
    }
}
  
  export default Client;
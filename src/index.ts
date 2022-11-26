import GuildManager from './Managers/GuildManager';
import PostManager from './Managers/PostManager';
import SessionManager from './Managers/SessionManager';
import UserManager from './Managers/UserManager';
import UserFlags from './Permissions/Flags';
import RequestEmitter, { requestParams } from './utils/RequestEmitter';
import type { myInformations } from './Managers/Interfaces/Me';
import MessageManager from './Managers/MessageManager';
import WebSocketRoutes from './Permissions/WebSocket';
import AffiliationManager from './Managers/AffiliationManager';
import PushNoficationManager from './Managers/PushNoficationManager';
import ExploreManager from './Managers/ExploreManager';

export const userFlags = UserFlags;
export const webSocketRoutes = WebSocketRoutes;

class Client extends RequestEmitter {
    
    public user: UserManager;
    public post: PostManager;
    public guild: GuildManager;
    public session: SessionManager;
    public message: MessageManager;
    public affiliation: AffiliationManager;
    public pushNotification: PushNoficationManager;
    public explore: ExploreManager;


    constructor(params: requestParams) {
        super(params);

        this.user = new UserManager(params);
        this.post = new PostManager(params);
        this.guild = new GuildManager(params);
        this.session = new SessionManager(params);
        this.message = new MessageManager(params);
        this.affiliation = new AffiliationManager(params);
        this.pushNotification = new PushNoficationManager(params);
        this.explore = new ExploreManager(params);
    }

    public async informations() {
        const request = await this.getRequest("/users/me/informations");

        const response = request as myInformations;

        return response;
    }
}
  
export default Client;
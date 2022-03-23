import RequestEmitter from "../utils/RequestEmitter";
import type { postInterface } from "./Interfaces/Post";

class PostUserManager extends RequestEmitter {

    constructor(token: string) {
        super(token);
    }

    public async fetch(target_id: string) {
        const request = await this.getRequest(`/users/${target_id}/posts`);

        return request as postInterface;
    }
}

export default PostUserManager;
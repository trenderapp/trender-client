import UserPermissions from "../Permissions/UserPermissions";
import { cdnsiteurl } from "../utils/Constante";
import EventEmitter from "../utils/RequestEmitter";
import type { profileInformations } from "./Interfaces/User";

class UserManager extends EventEmitter {

    public permissions: UserPermissions;

    constructor(token: string) {
        super(token);

        this.permissions = new UserPermissions();
    }

    public avatar(user_id: string, avatar: string) {
        if(avatar === "base_1.png" || avatar === "base_2.png") return `${cdnsiteurl}/avatars/${avatar}`;
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
}

export default UserManager;
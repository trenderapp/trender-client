import type LANGUAGES_LIST from "../../utils/ISO-369-1";
import type { error } from "./Global";

export type myInformations = {
    error?: error,
    data?: {
        user_id: string,
        nickname: string,
        avatar: string,
        token: string,
        locale: LANGUAGES_LIST
    }
}
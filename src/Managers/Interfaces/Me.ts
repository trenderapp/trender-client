import type LANGUAGES_LIST from "../../utils/ISO-369-1";

export type myInformations = {
    data: {
        user_id: string,
        nickname: string,
        avatar: string,
        token: string,
        locale: LANGUAGES_LIST
    }
}
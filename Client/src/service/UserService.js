import {api} from "../http";

export default class UserService {



    static async getUsers(id) {
        debugger
        const res = api.get('/users').then(response => response.data)
        console.log(res.data)
        return res
    }

}
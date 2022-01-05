import api from "../http";

export default class UsertService {

    static async fetchUsers() {
        return api.get('/users')
    }

}
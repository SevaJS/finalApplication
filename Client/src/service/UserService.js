import api from "../http";

export default class UserService {


    static async getUsers() {
        const res = api.get('/users').then(response => response.data)
        console.log(res)
        return res
    }

    static async dellUser(id) {
        const res = api.post('/users/del', {id: id}).then(response => response.data)
        console.log(res)
        return res
    }

    static async getUser(id) {
        const res = api.get('/users/' + id).then(response => response.data)
        console.log(res)
        return res
    }


}
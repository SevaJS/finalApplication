import {api} from "../http";

export default class AuthService {

    static async createItem(item) {
        debugger
        return api.post('/collections', item).then(response => response.data)
    }

    static async getItems() {
        const res = api.get('/collections').then(response => response.data)
        console.log(res.data)
        return res
    }

    static async getItem(id) {debugger
        const res = api.get('/collections/'+id).then(response => response.data)
        console.log(res.data)
        return res
    }


}
import api from "../http";

export default class CollectionService {

    static async createItem(item) {
        debugger
        const res = await api.post('/collections', item).then(response => response.data)
        console.log(res)
        return res
    }

    static async getItems() {
        const res = api.get('/collections').then(response => response.data)
        console.log(res)
        return res
    }

    static async getItem(id) {
        const res = api.get('/collections/' + id).then(response => response.data)
        console.log(res.data)
        return res
    }


}
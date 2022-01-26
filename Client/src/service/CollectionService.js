import api from "../http";


export default class CollectionService {


    static async createCollection(item) {
        const res = await api.post('/collections', item).then(response => response.data)
        console.log(res)
        return res
    }

    static async getCollections() {
        const res = api.get('/collections').then(response => response.data)
        return res
    }

    static async getCollection(id) {
        const res = api.get('/collections/' + id).then(response => response.data)
        return res
    }

    static async dellColl(id) {
        const res = api.post('/collections/del', {id: id}).then(response => response.data)
        console.log(res)
        return res
    }

    static async editCollDependence(id, data) {
        const res = api.put('/collections', {id: id, data: data}).then(response => response.data)
        console.log(res)
        return res
    }
    static async getUsersCollections(id, data) {
        const res = api.get('/usersCollections', {id: id, data: data}).then(response => response.data)
        console.log(res)
        return res
    }


}
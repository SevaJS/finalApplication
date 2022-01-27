import api from "../http";


export default class CollectionService {


    static async createCollection(data) {
        debugger
        const res = await api.post('/collections', data, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        }).then(response => response.data)
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

    static async getUsersCollections(id) {
        debugger
        const res = api.get('/usersCollections/' + id).then(response => response.data)
        console.log(res)
        return res
    }

    static async uploadImg(data) {
        debugger
        const res = api.post('/upload', data, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        }).then(response => response.data)
        console.log(res)
        return res
    }


}
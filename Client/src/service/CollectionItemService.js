import api from "../http";


export default class CollectionItemService {


    static async createItem(data, id) {
        debugger
        const res = await api.post('/collections/:id/', {
            title: data.title,
            id: id,
            description: data.description
        }).then(response => response.data)
        console.log(res)
        return res
    }

    static async getItems(id) {
        debugger
        const res = api.get('/collectionItems').then(response => response.data)
        console.log(res)
        return res
    }

    static async getItem(id) {debugger
        const res = api.get('/collectionItem/' + id).then(response => response.data)
        return res
    }

    static async dellItem(id) {
        const res = api.post('/collections/:id/del', {id: id}).then(response => response.data)
        console.log(res)
        return res
    }


}
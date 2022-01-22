import api from "../http";

export default class TypeService {


    static async getTypes() {
        return api.get('/types').then(response => response.data)
    }

    static async createTypes(data) {
        return api.post('/types', data).then(response => response.data)
    }


}
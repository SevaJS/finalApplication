import {api} from "../http";

export default class AuthService {

    static async login(email, password) {debugger
        return api.post('/login', {email, password, role: "USER"}).then(response => response.data)
    }

    static async registration(email, password) {
        return api.post('/registration', {email, password}).then(response => response.data)
    }

    static async logout() {
        return api.post('/logout')
    }
}
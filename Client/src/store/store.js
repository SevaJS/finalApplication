import {makeAutoObservable} from 'mobx'
import AuthService from "../service/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {
    isAuth = false;
    user: ''

    constructor() {
        makeAutoObservable(this)

    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email: string, password: string) {
        debugger
        try {
            debugger
            const res = await AuthService.login(email, password);
            console.log(res)
            localStorage.setItem('token', res.accessToken);
            this.setAuth(true);
            this.setUser(res.user)

        } catch (e) {
            console.log(e);

        }

    }

    async register(email: string, password: string) {
        try {
            const res = await AuthService.registration(email, password)
            localStorage.setItem('token', res.accessToken);
            this.setAuth(true);
            this.setUser(res.user)

        } catch (e) {
            console.log(e);

        }

    }

    async logout() {
        try {
            const res = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            //this.setUser(res.data.user)
        } catch (e) {
            console.log(e);

        }

    }

    async checkAuth() {
        try {
            const res = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            console.log(res)
            localStorage.setItem('token', res.accessToken);
            this.setAuth(true);
            this.setUser(res.user)


        } catch (e) {
            console.log(e)

        }
    }

}
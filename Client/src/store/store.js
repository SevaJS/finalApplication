import {makeAutoObservable} from 'mobx'
import AuthService from "../service/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {

    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)

    }

    setAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    async login(email: string, password: string) {
        try {
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
        debugger
        try {
            this.setAuth(false);
            const res = await AuthService.logout();
            localStorage.removeItem('token');
            this.setUser(res.data.user)
        } catch (e) {
            console.log(e);

        }

    }

    async checkAuth() {
        try {

            const res = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            console.log(res)
            localStorage.setItem('token', res.accessToken);
            this.setUser(res.user)
            this.setAuth(true);
            return res


        } catch (e) {
            console.log(e)

        }
    }

}
import {makeAutoObservable} from 'mobx'
import AuthService from "../service/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import UserService from "../service/UserService";

export default class UserStore {

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
            localStorage.setItem('token', res.accessToken);
            this.setAuth(true);
            this.setUser(res.user)

        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async register(email: string, password: string) {
        try {
            const res = await AuthService.registration(email, password)
            localStorage.setItem('token', res.accessToken);
            this.setAuth(true);
            this.setUser(res.user)

        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async logout() {
        try {
            this.setAuth(false);
            const res = await AuthService.logout();
            localStorage.removeItem('token');

            this.setUser(res.data)
        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async checkAuth() {
        try {
            const res = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', res.data.accessToken);
            this.setUser(res.data.user)
            this.setAuth(true);
            return res


        } catch (e) {
            alert(e.response.data.message);

        }
    }

    async editProfile(data) {
        try {
            return await UserService.editProfile(data).then(res => res)
        } catch (e) {
            alert(e.response.data.message);

        }

    }

}
import {makeAutoObservable} from 'mobx'

export default class typeStore {

    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)

    }


}
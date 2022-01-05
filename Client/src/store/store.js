
import {makeAutoObservable} from 'mobx'

export default class Store{
    usAuth=false;

    constructor() {
        makeAutoObservable(this)

    }


}
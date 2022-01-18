import {makeAutoObservable} from "mobx";
import CollectionService from "../service/CollectionService";
import UserService from "../service/UserService";

export default class collectionsStore {

    constructor() {
        this._selectedType = {}
        this.item = []
        this.collTypes = [
            {id: 1, name: 'PIVO'},
            {id: 2, name: 'BOOKS'},
            {id: 3, name: 'ALKO'},
            {id: 4, name: 'PIVO'},


        ]

        makeAutoObservable(this)
    }

    setItems(item) {
        this.item = item
    }


    setSelectedType(type) {
        this._selectedType = type;

    }

    get selectedType() {
        return this._selectedType

    }

    async getItems() {
        try {
            const res = await CollectionService.getItems();
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getItem(id) {
        try {
            debugger
            const res = await CollectionService.getItem(id);
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getUsers() {
        try {
            debugger
            const res = await UserService.getUsers();
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

}
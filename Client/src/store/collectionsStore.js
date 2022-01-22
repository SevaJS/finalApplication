import {makeAutoObservable} from "mobx";
import CollectionService from "../service/CollectionService";
import UserService from "../service/UserService";
import TypeService from "../service/TypeService";

export default class collectionsStore {

    constructor() {
        debugger
        this._selectedType = {}
        this.typeToCreate = {}
        this.item = []
        this.collTypes = []
        this.users = []

        makeAutoObservable(this)
    }

    setItems(item) {
        this.item = item
    }

    setUsers(users) {
        this.users = users
    }

    get getCollItems() {
        return this.item
    }

    setTypes(type) {
        this.collTypes = type
    }

    setSelectedTypeToCreate(type) {
        debugger
        this.typeToCreate = type
    }

    get selectedTypeToCreate() {
        return this.typeToCreate
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
            const res = await CollectionService.getItem(id);
            this.setUsers(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getUsers() {
        try {
            const res = await UserService.getUsers()
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getUser(id) {
        try {
            const res = await UserService.getUser(id)
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async dellUser(id) {
        try {
            const res = await UserService.dellUser(id)
            const userUpd = await this.getUsers()
            this.setUsers(userUpd)
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }


    async createCollection(data) {
        try {
            debugger
            const res = await CollectionService.createItem(data)
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getTypes() {
        debugger
        const res = await TypeService.getTypes()
        console.log(res)
        return res
    }

    async createType(data) {
        const res = await TypeService.createTypes(data)
        console.log(res)
        return res
    }


}
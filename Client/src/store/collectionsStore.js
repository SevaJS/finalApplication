import {makeAutoObservable, observable} from "mobx";
import CollectionService from "../service/CollectionService";
import UserService from "../service/UserService";
import TypeService from "../service/TypeService";

export default class collectionsStore {


    _selectedType = {};
    typeToCreate = {}
    item = []
    collTypes = []
    users = []

    constructor() {
        this._selectedType = {}
        this.typeToCreate = {}
        this.item = []
        this.collTypes = []
        this.users = []
        console.log(this.item)

        makeAutoObservable(this, {item: observable}, {deep: true})
    }

    setItems(item) {
        this.item = item
    }

    setUsers(users) {
        this.users = users
    }


    setTypes(type) {
        this.collTypes = type
    }

    setSelectedTypeToCreate(type) {
        this.typeToCreate = type
    }

    get selectedTypeToCreate() {
        return this.typeToCreate
    }

    get getItems() {
        return this.item
    }

    get getUsers() {
        return this.users
    }


    setSelectedType(type) {
        this._selectedType = type;

    }


    get selectedType() {
        return this._selectedType

    }

    async getItems() {
        try {
            const res = await CollectionService.getItems()
            this.setItems(res)
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getItem(id) {
        try {
            const res = await CollectionService.getItem(id);
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

    async dellColl(id) {
        try {
            debugger
            const res = await CollectionService.dellColl(id)
            console.log(res)
            await this.getItems()
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }


    async createCollection(data) {
        debugger
        try {
            const res = await CollectionService.createItem(data)
            this.getItems()
            console.log(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getTypes() {
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
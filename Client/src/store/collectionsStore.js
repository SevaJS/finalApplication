import {makeAutoObservable, observable} from "mobx";
import CollectionService from "../service/CollectionService";
import UserService from "../service/UserService";

export default class collectionsStore {


    item = []
    users = []
    userColls = []

    constructor() {

        this.item = []
        this.users = []
        this.userColls = []

        makeAutoObservable(this, {item: observable}, {deep: true})
    }

    setItems(item) {
        this.item = item
    }


    setUsers(users) {
        this.users = users
    }

    setUserColls(colls) {
        this.userColls = colls
    }


    async getItems() {
        try {
            const res = await CollectionService.getCollections()
            this.setItems(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getUsers() {
        try {
            const res = await UserService.getUsers()
            await this.setUsers(res)
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
            await this.setUsers(userUpd)
            console.log(res)
            return res;

        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async dellColl(id) {
        try {

            const res = await CollectionService.dellColl(id)
            await this.getItems()
            return res


        } catch (e) {
            alert(e.response.data.message);

        }

    }


    async createCollection(data) {
        try {
            const res = await CollectionService.createCollection(data)
            await this.getItems()
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async editCollection(id, data) {
        try {
            const res = await CollectionService.editCollDependence(id, data)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getItem(id) {
        debugger
        try {
            const res = await CollectionService.getCollection(id);
            this.setItems(res.items)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getUsersCollections(id) {
        debugger
        try {
            const res = await CollectionService.getUsersCollections(id);
            await this.setUserColls(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async dellUserColl(id, authorID) {
        try {

            const res = await CollectionService.dellColl(id)
            await this.getUsersCollections(authorID)
            return res


        } catch (e) {
            alert(e.response.data.message);

        }

    }


}
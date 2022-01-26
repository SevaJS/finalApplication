import {makeAutoObservable, observable} from "mobx";
import CollectionItemService from "../service/CollectionItemService";

export default class collectionsItemStore {


    items = []

    constructor() {
        this.items = []
        makeAutoObservable(this, {item: observable}, {deep: true})
    }

    setItems(items) {
        this.items = items
    }

    async getItems() {
        try {
            const res = await CollectionItemService.getItems()
            this.setItems(res)
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }

    async getItem(id) {
        try {
            const res = await CollectionItemService.getItem(id);
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }


    async dellCollItem(id) {
        try {
            const res = await CollectionItemService.dellItem(id)
            console.log(res)
            /*await this.getItems()*/
            return res;


        } catch (e) {
            alert(e.response.data.message);

        }

    }


    async createCollItem(data, id) {
        try {
            const res = await CollectionItemService.createItem(data, id)
            return res;

        } catch (e) {
            alert(e.response.data.message);

        }

    }


}
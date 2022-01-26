import {makeAutoObservable, observable} from "mobx";
import CollectionItemService from "../service/CollectionItemService";

export default class collectionsItemStore {


    item = []

    constructor() {
        this.item = []
        makeAutoObservable(this, {item: observable}, {deep: true})
    }

    setItems(item) {
        this.item = item
    }

    async getItems(id) {
        try {
            const res = await CollectionItemService.getItems(id)
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
        debugger
        debugger
        try {
            const res = await CollectionItemService.createItem(data, id)
            return res;

        } catch (e) {
            alert(e.response.data.message);

        }

    }


}
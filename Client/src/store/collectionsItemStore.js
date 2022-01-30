import { makeAutoObservable, observable } from "mobx";
import CollectionItemService from "../service/CollectionItemService";

export default class collectionsItemStore {
  items = [];

  collItems = [];

  collItem = "";

  constructor() {
    this.items = [];
    this.collItems = [];
    this.collItem = "";
    makeAutoObservable(this, { item: observable }, { deep: true });
  }

  setItems(items) {
    this.items = items;
  }

  setCollItems(items) {
    this.collItems = items;
  }

  setCollItem(item) {
    this.collItem = item;
  }

  async getItems() {
    try {
      const res = await CollectionItemService.getItems();
      this.setItems(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getItem(id) {
    try {
      const res = await CollectionItemService.getItem(id);
      this.setCollItem(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async dellCollItem(id, authorID) {
    try {
      const res = await CollectionItemService.dellItem(id, authorID);
      this.getItems();
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async createCollItem(data, id) {
    try {
      const res = await CollectionItemService.createItem(data, id);
      await this.getCollectionItem(id);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getCollectionItem(id) {
    try {
      const res = await CollectionItemService.getCollectionItem(id);
      this.setCollItems(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async addComm(id, comment, author) {
    try {
      return await CollectionItemService.addComm(id, comment, author);
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}

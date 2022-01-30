import { makeAutoObservable, observable } from "mobx";
import CollectionService from "../service/CollectionService";
import UserService from "../service/UserService";
import CollectionItemService from "../service/CollectionItemService";

export default class collectionsStore {
  item = [];

  usersItems = [];

  users = [];

  userColls = [];

  user = "";

  constructor() {
    this.item = [];
    this.users = [];
    this.userColls = [];
    this.usersItems = [];
    this.user = "";

    makeAutoObservable(this, { item: observable }, { deep: true });
  }

  setItems(item) {
    this.item = item;
  }

  setUsers(users) {
    this.users = users;
  }

  setUserColls(colls) {
    this.userColls = colls;
  }

  setUser(colls) {
    this.user = colls;
  }

  setUsersItems(items) {
    this.usersItems = items;
  }

  get getUserInfo() {
    return this.user;
  }

  async getItems(selectedType) {
    try {
      const res = await CollectionService.getCollections(selectedType || "");
      this.setItems(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getUsers() {
    try {
      const res = await UserService.getUsers();
      await this.setUsers(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getUser(id) {
    try {
      const res = await UserService.getUser(id);
      this.setUser(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async dellUser(id) {
    try {
      const res = await UserService.dellUser(id);
      const userUpd = await this.getUsers();
      await this.setUsers(userUpd);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async dellColl(id, authorId) {
    try {
      const res = await CollectionService.dellColl(id);
      await this.getItems();
      if (authorId) {
        await this.getUsersCollections(authorId);
        await this.getUsersItems(authorId);
      }
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async createCollection(data) {
    try {
      const res = await CollectionService.createCollection(data);
      await this.getItems();
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async editCollection(id, data) {
    try {
      return await CollectionService.editCollDependence(id, data);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getItem(id) {
    try {
      const res = await CollectionService.getCollection(id);
      this.setItems(res.items);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getUsersCollections(id) {
    try {
      const res = await CollectionService.getUsersCollections(id);
      await this.setUserColls(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async getUsersItems(id) {
    try {
      const res = await CollectionService.getUsersItems(id);
      this.setUsersItems(res);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async dellUserColl(id, authorID) {
    try {
      const res = await CollectionService.dellColl(id);
      await this.getUsersCollections(authorID);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async dellUserItem(id, authorID) {
    try {
      const res = await CollectionItemService.dellItem(id, authorID);
      this.getUsersItems(id);
      return res;
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}

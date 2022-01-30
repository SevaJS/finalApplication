import api from "../http";

export default class CollectionItemService {
  static async createItem(data, id) {
    const res = await api
      .post("/collections/:id/", {
        title: data.title,
        id,
        description: data.description,
        author: data.author,
        motherCollId: id,
        picture: data.file,
      })
      .then((response) => response.data);
    return res;
  }

  static async getItems() {
    const res = api.get("/collectionItems").then((response) => response.data);
    return res;
  }

  static async getItem(id) {
    const res = api.get(`/Item/${id}`).then((response) => response.data);
    return res;
  }

  static async getCollectionItem(id) {
    const res = api
      .get(`/collectionItem/${id}`)
      .then((response) => response.data);
    return res;
  }

  static async dellItem(id, authorID) {
    return api
      .post("/collections/:id/del", { id, authorID })
      .then((response) => response.data);
  }

  static async addComm(id, comment, author) {
    return api
      .put("/collectionItem/:id'", { id, comment, author })
      .then((response) => response.data);
  }

  static async getComms(id) {
    debugger;
    return api
      .get("/collectionItem/:id'", { id })
      .then((response) => response.data);
  }
}

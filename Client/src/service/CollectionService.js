import api from "../http";

export default class CollectionService {
  static async createCollection(data) {
    const res = await api
      .post("/collections", data)
      .then((response) => response.data);
    return res;
  }

  static async getCollections(selectedType) {
    return api
      .get("/collections", { params: { type: selectedType } })
      .then((response) => response.data);
  }

  static async getCollection(id) {
    return api.get(`/collections/${id}`).then((response) => response.data);
  }

  static async dellColl(id) {
    return api
      .post("/collections/del", { id })
      .then((response) => response.data);
  }

  static async editCollDependence(id, data) {
    return api
      .put("/collections", { id, data })
      .then((response) => response.data);
  }

  static async getUsersCollections(id) {
    return api.get(`/usersCollections/${id}`).then((response) => response.data);
  }

  static async getUsersItems(id) {
    return api.get(`/usersItems/${id}`).then((response) => response.data);
  }
}

import api from "../http";

export default class UserService {
  static async getUsers() {
    return api.get("/users").then((response) => response.data);
  }

  static async dellUser(id) {
    return api.post("/users/del", { id }).then((response) => response.data);
  }

  static async getUser(id) {
    return api.get(`/users/${id}`).then((response) => response.data);
  }

  static async editProfile(data) {
    return api.put("/editUser", data).then((response) => response.data);
  }
}

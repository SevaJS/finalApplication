import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return api
      .post("/login", { email, password })
      .then((response) => response.data);
  }

  static async registration(email, password) {
    return api
      .post("/registration", { email, password, role: "USER" })
      .then((response) => response.data);
  }

  static async logout() {
    return api.post("/logout");
  }
}

import http from "../http-common";

class UserService {
 

  login(data) {
    return http.post("/login", data);
  }

  getAllChannels(id) {
    return http.get("/", id);
  }

  getOneChannel(id) {
    return http.get(`/${id}`);
  }
 
  CreateChat(data, id) {
    return http.post(`/${id}`, data);
  }
  CreateChannel(data) {
    return http.put("/", data);
  }
  delete(id) {
    return http.delete(`/${id}`);
  }


}

export default new UserService();
import axios from "axios";

const BASE_URL = "http://10.0.10.34:3500/api";

export default ApiServices = {
  getAllTasks() {
    return axios.get(`${BASE_URL}/tasks`);
  },
};

import { createStore } from "vuex";
import userManagement from "@/services/UserDepartment.module.js";
const BASE_URL = "http://10.0.10.41:3500";
export default createStore({
  modules: {
    u: userManagement,
  },
});

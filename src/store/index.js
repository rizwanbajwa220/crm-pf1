import { createStore } from "vuex";

import login from './auth/login.module.js'
import userManagement from "@/services/UserDepartment.module.js";

export default createStore({
  modules: {
    login,
    u: userManagement,
  }
});




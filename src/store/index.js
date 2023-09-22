import { createStore } from "vuex";

import login from './auth/login.module.js'
import register from './auth/register.module.js'
import userManagement from "@/services/UserDepartment.module.js";

export default createStore({
  modules: {
    login,
    register,
    u: userManagement,
  }
});




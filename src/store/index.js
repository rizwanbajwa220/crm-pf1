import { createStore } from "vuex";
import department from "./department/department.module";
import login from "./auth/login.module.js";
import register from "./auth/register.module.js";
import userManagement from "@/services/UserDepartment.module.js";

import task from "./task/task.module";

const BASE_URL = "http://10.0.10.41:3500";

export default createStore({
  modules: {
    task,
    department,
    login,
    register,
    u: userManagement,
  },
});

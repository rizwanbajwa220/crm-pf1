

import { createStore } from 'vuex'
// import Vue from 'vue'
import department from './department/department.module'
import login from './auth/login.module.js'
import register from './auth/register.module.js'
import userManagement from "@/services/UserDepartment.module.js";


export default new createStore({
  modules:{
    department,
    login,
    register,
    u: userManagement,
  }
})


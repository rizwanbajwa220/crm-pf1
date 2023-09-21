

import { createStore } from "vuex";
import login from './auth/login.module.js'

export default createStore({
  modules: {
    login,
  }
});
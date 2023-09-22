

import { createStore } from 'vuex'
// import Vue from 'vue'
import department from './department/department.module'


export default new createStore({
  modules:{
    department
  }
})
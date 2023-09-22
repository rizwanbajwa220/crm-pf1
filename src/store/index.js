import { createStore } from "vuex";

import task from "./task/task.module";

const BASE_URL = "http://10.0.10.41:3500";

export default createStore({
  modules: {
    task,
  },
});

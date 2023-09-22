import ApiServices from "../../services/Api.js"; // Replace with the actual path
import router from "../../router/index.js";

const state = {
  loginCredentials: null,
  permissions: [],
  // admin: []
};

const mutations = {
  SET_LOGIN_CREDENTIALS(state, data) {
    localStorage.setItem("token", data.token);
    state.loginCredentials = data;

    // Extract and store permissions
    state.permissions = data.user.permissions;
  },
};

const actions = {
  async loginUser({ commit }, { email, password }) {
    try {
      const response = await ApiServices.login(email, password);
      commit("SET_LOGIN_CREDENTIALS", response);
      router.push({ path: "/admin-dashboard" });

      // Log state.permissions in the next tick of the event loop
      setTimeout(() => {
        console.log("permissions", state.permissions);
      }, 0);
    } catch (error) {
      console.error("Login failed", error);
      // Handle login error, e.g., display an error message to the user
    }
  },
};

const getters = {
  getLoginCredentials: (state) => state.loginCredentials,
  getPermissions: (state) => state.permissions,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

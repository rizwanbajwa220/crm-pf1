import ApiServices from '../../services/Api.js'; // Replace with the actual path


const state = {
    loginCredentials: null,
    permissions: [],  
  };
  
  const mutations = {
    SET_LOGIN_CREDENTIALS(state, data) {
        localStorage.setItem('token', data.token);
      state.loginCredentials = data;

      // Extract and store permissions
    state.permissions = data.user.permissions;
    },
  };
  
  const actions = {
    async loginUser({ commit }, { email, password }) {
      try {
        const response = await ApiServices.login(email, password);
        // console.log("pepre",state.permissions)
        commit('SET_LOGIN_CREDENTIALS', response);

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
  

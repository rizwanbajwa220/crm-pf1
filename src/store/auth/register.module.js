import ApiServices from '../../services/Api.js'; // Replace with the actual path
import router from '../../router/index.js';


const state = {
    registerCredentials: null,
  };
  
  const mutations = {
    SET_REGISTER_CREDENTIALS(state, data) {
        // localStorage.setItem('token', data.token);
      state.registerCredentials = data;
    },
  };
  
  const actions = {
    async registerUser({ commit }, { name,email, password,confirm_password }) {
      try {
        const response = await ApiServices.register(name, email, password, confirm_password);
        commit('SET_REGISTER_CREDENTIALS', response);
        router.push({ path: '/' });

      } catch (error) {
        console.error("signup failed", error);
      }
    },
  };
  
  const getters = {
    getRegisterCredentials: (state) => state.registerCredentials,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  

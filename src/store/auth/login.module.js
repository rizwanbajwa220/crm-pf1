import ApiServices from '../../services/Api'; // Replace with the actual path

const state = {
    loginCredientials: null,
    // Your state properties here
};

const mutations = {
    registerUser(state, users) {
        state.userData.loginCredientials = users;
    },
    // Your mutations here
};

const actions = {
    async loginUser({ commit }, { email, password }) {
        try {
            const response = await ApiServices.login(email, password);
            // Handle a successful login response here
            console.log("Login successful", response.data);
        } catch (error) {
            // Handle login error
            console.error("Login failed", error);
        }
    },
};

const getters = {
    // Your getters here
};

export default {
    state,
    mutations,
    actions,
    getters,
};

import ApiServices from '../../services/Api'; // Replace with the actual path

const state = {
    signupCredientials: null,
    // Your state properties here
};

const mutations = {
    registerUser(state, users) {
        state.userData.signupCredientials = users;
    },
    // Your mutations here
};

const actions = {
    async registerUser({ commit }, { name,email, password,cpassword }) {
        try {
            const response = await ApiServices.register(name,email, password,cpassword);
            // Handle a successful login response here
            console.log("register successful", response.data);
        } catch (error) {
            // Handle login error
            console.error("register failed", error);
        }
    },
};

const getters = {
    // Your getters here
    registerUser: (state) => state.userData.signupCredientials,
};

export default {
    state,
    mutations,
    actions,
    getters,
};

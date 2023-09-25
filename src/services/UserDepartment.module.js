import Api from "./Api";

const state = {
  userData: {
    isLoading: false,
    error: null,
    itemsPerPage: 5,
    headers: [
      {
        title: "Name",
        align: "start",
        sortable: false,
        key: "name",
      },
      { title: "Email", align: "center", key: "email" },
      { title: "Created_At", align: "center", key: "created_at" },
      { title: "Actions", align: "center", key: "actions" },
    ],
    users: [
      // {
      //   id: 1,
      //   name: "Ahmed",
      //   email: "test@example.com",
      //   created_at: "2021-06-02 10:00:00",
      // },
      // {
      //   id: 2,
      //   name: "Ahad",
      //   email: "test@example.com",
      //   created_at: "2021-06-02 10:00:00",
      // },
    ],
  },
};

const getters = {
  getUsers: (state) => state.userData.users,
  getHeaders: (state) => state.userData.headers,
  getItemsPerPage: (state) => state.userData.itemsPerPage,
  getIsLoading: (state) => state.userData.isLoading,
  getError: (state) => state.userData.error,
};

const mutations = {
  setUsers(state, users) {
    state.userData.users = users;
  },

  setError(state, error) {
    state.userData.error = error;
  },

  setIsLoading(state, isLoading) {
    state.userData.isLoading = isLoading;
  },

  updateUser(state, user) {
    const index = state.userData.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      state.userData.users.splice(index, 1, user);
    }
  },
};

const actions = {
  // fetch Users

  async fetchUsers({ commit }) {
    try {
      commit("setIsLoading", true);
      const res = await Api.fetchUsers();
      commit("setUsers", res);
      commit("setIsLoading", false);
    } catch (err) {
      commit("setError", err.message);
      commit("setIsLoading", false);
    }
  },

  // update User

  async updateUser(
    { commit },
    { id, name, email, password, confirm_password }
  ) {
    try {
      const resp = await Api.updateUser(
        id,
        name,
        email,
        password,
        confirm_password
      );
      commit("updateUser", resp.data);
    } catch (err) {
      commit("setError", err.message);
    }
  },
};

export default { state, getters, mutations, actions };

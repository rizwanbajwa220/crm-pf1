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
    users: [],
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
      this.isLoading = true;
      const res = await Api.fetchUsers();
      commit("setUsers", res.data);
      this.isLoading = false;
    } catch (err) {
      alert(err);
      this.error = err;
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
      alert(err);
    }
  },
};

export default { state, getters, mutations, actions };

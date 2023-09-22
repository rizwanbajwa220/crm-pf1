import Api from "./Api";

const BASE_URL = "http://10.0.10.34:3500/api";

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
      {
        id: 1,
        name: "admin@gmail.com",
        email: "admin@example.com",
        created_at: "2023-09-18T08:39:49.000000Z",
        updated_at: "2023-09-18T08:39:49.000000Z",
      },
      {
        id: 2,
        name: "nauman",
        email: "nomi123@gmail.com",
        created_at: "2023-09-18T08:53:52.000000Z",
        updated_at: "2023-09-18T08:53:52.000000Z",
      },
      {
        id: 3,
        name: "nomi",
        email: "nomi@example.com",
        created_at: "2023-09-18T10:45:23.000000Z",
        updated_at: "2023-09-18T10:45:23.000000Z",
      },
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
};

const actions = {
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
};

export default { state, getters, mutations, actions };

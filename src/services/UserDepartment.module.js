import Api from "./Api";

const BASE_URL = "http://10.0.10.34:3500/api";

const state = {
  userData: {
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
};

const mutations = {
  setUsers(state, users) {
    state.userData.users = users;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const res = await Api.fetchUsers();
      commit("setUsers", res.data);
    } catch (err) {
      alert(err);
    }
  },
};

export default { state, getters, mutations, actions };

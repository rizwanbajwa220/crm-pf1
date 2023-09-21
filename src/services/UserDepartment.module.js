import Api from "./Api";

const BASE_URL = "http://10.0.10.34:3500/api";

const state = {
  userData: {
    itemsPerPage: 3,
    headers: [
      {
        title: "Name",
        align: "start",
        sortable: false,
        key: "name",
      },
      { title: "Email", align: "center", key: "Email" },
      { title: "Created_At", align: "center", key: "role" },
      { title: "Actions", align: "center", key: "Actions" },
    ],
    users: null,
  },
};

const getters = {
  getUsers: (state) => state.userData.users,
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

import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    userData: {
      itemsPerPage: 5,
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
      users: [
        {
          name: "Kashif",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
      ],
    },
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.userData.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const res = await axios.get("http://10.0.10.41:3500/api/users");
        commit("setUsers", res.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      }
    },
  },
  modules: {},
});

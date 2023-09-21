import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    userData: {
      loginCredientials:null,
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
  getters: {
    getUsers: (state) => state.userData.users,
    registerUser: (state) => state.userData.loginCredientials,
  },
  mutations: {
    setUsers(state, users) {
      state.userData.users = users;
    },
    registerUser(state, users) {
      state.userData.loginCredientials = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const token = "28|rjB7LM94hlukKSlwp4EC7wZUCCtmT3vR4741ejLt9c1f2acb";
        const res = await axios.get("http://10.0.10.41:3500/api/users", {
          // send token
          headers: {
            // send token
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
            Authorization: `Bearer ${token}`,
          },
        });
        commit("setUsers", res.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      }
    },
    async registerUser({ commit }) {
      try {
        const res = await axios.post("http://10.0.10.41:3500/api/users/register", {
          body:{
            name: "Kashif",
            email: "abdullah@gmail.com",
            password:"123456",
            cpassword:"123456"
          }
        });
        commit("registerUser", res.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      }
    },
  },
  
  modules: {},
});

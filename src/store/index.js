import { createStore } from "vuex";
import axios from "axios";
const BASE_URL = "http://10.0.10.41:3500";
export default createStore({
  state: {
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
      users: [
        {
          name: "Kashif",
          email: "kashif@example.com",
          created_At: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
      ],
      // },
      // {
      //   name: "Kashif",
      //   email: "kashif@example.com",
      //   created_At: "Admin",
      //   Actions: [
      //     { icon: "mdi-pencil", color: "primary" },
      //     { icon: "mdi-delete", color: "error" },
      //   ],
      // },
      // {
      //   name: "Kashif",
      //   email: "kashif@example.com",
      //   created_At: "Admin",
      //   Actions: [
      //     { icon: "mdi-pencil", color: "primary" },
      //     { icon: "mdi-delete", color: "error" },
      //   ],
      // },
      // {
      //   name: "Kashif",
      //   email: "kashif@example.com",
      //   created_At: "Admin",
      //   Actions: [
      //     { icon: "mdi-pencil", color: "primary" },
      //     { icon: "mdi-delete", color: "error" },
      //   ],
      // },
      // {
      //   name: "Saleem",
      //   email: "kashif@example.com",
      //   created_At: "Admin",
      //   Actions: [
      //     { icon: "mdi-pencil", color: "primary" },
      //     { icon: "mdi-delete", color: "error" },
      //   ],
      // },
      // ],
    },
    taskData: {
      itemsPerPage: 5,
      headers: [
        {
          title: "Task Title",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "User ID", align: "center", sortable: false, key: "user_id" },
        {
          title: "Comments",
          align: "center",
          sortable: false,
          key: "comments",
        },
        { title: "Status", align: "center", sortable: false, key: "status" },
        {
          title: "Created At",
          align: "center",
          sortable: false,
          key: "created_at",
        },
        { title: "Actions", align: "center", sortable: false, key: "actions" },
      ],
      tasks: [
        {
          name: "Task 1",
          status: "active",
          user_id: 2,
          comments: "This is a sample task",
          created_at: "2023-09-18T11:23:42.000000Z",
        },
      ],
    },
  },

  getters: {
    getUsers: (state) => state.userData.users,
    getHeaders: (state) => state.userData.headers,
    getItemsPerPage: (state) => state.userData.itemsPerPage,
    getTaskData: (state) => state.taskData,
    getUserNames: (state) => state.userData.users.map((user) => user.name),
  },
  mutations: {
    setUsers(state, users) {
      state.userData.users = users;
    },
    setTasks(state, tasks) {
      state.taskData.tasks = tasks;
    },
  },
  actions: {
    // function to set token to local storage

    async setToken({ commit }, token) {
      try {
        localStorage.setItem("token", token);
        commit("setToken", token);
      } catch (err) {
        alert(err);
      }
    },

    // function to fetch users

    async fetchUsers({ commit }) {
      try {
        // const token = "28|rjB7LM94hlukKSlwp4EC7wZUCCtmT3vR4741ejLt9c1f2acb";
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/api/users`, {
          // send token
          headers: {
            // send token
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
            Authorization: `Bearer ${token}`,
          },
        });
        commit("setUsers", res.data);
        console.log(res.data);
      } catch (err) {
        alert(err);
      }
    },
  },
  modules: {},
});

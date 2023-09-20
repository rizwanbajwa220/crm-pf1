import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {
      itemsPerPage: 5,
      headers: [
        {
          title: "First Name",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "Last Name", align: "center", key: "lastName" },
        { title: "Email", align: "center", key: "Email" },
        { title: "Role", align: "center", key: "role" },
        { title: "Actions", align: "center", key: "Actions" },
      ],
      users: [
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
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
  mutations: {},
  actions: {},
  modules: {},
});

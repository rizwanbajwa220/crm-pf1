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
  mutations: {},
  actions: {},
  modules: {},
});

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
          id: 1,
          Email: "kashif@example.com",
          role: "Admin",
        },
        {
          name: "Haris",
          lastName: "Waqar",
          id: 2,
          Email: "haris@example.com",
          role: "Admin",
        },
        {
          name: "Abdullah",
          lastName: "Saeed",
          id: 3,
          Email: "haris@example.com",
          role: "Admin",
        },
        {
          name: "Usman",
          lastName: "Ahmad",
          id: 4,
          Email: "haris@example.com",
          role: "Admin",
        },
        {
          name: "Furqan",
          lastName: "Latif",
          id: 5,
          Email: "haris@example.com",
          role: "Admin",
        },
      ],
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
          user_id: 6,
          comments: "This is a sample task",
          created_at: "2023-09-18T11:23:42.000000Z",
        },
      ],
    },
  },
  getters: {
    getTaskData: (state) => state.taskData,
    getUserNames: (state) => state.userData.users.map((user) => user.id),
  },
  mutations: {},
  actions: {},
  modules: {},
});

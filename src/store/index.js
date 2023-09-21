import { createStore } from "vuex";

export default createStore({
  state: {
    departmentData: {
      itemsPerPage: 5,
      headers: [
        {
          title: "Name",
          align: "center",
          key: "name",
        },
        {
          title: "Created At",
          align: "center",
          key: "createdAt",
        },
        {
          title: "Actions",
          align: "center",
          key: "actions",
        },
      ],
      departments: [
        {
          name: "HR",
          createdAt: "2023-09-19 AT 8:15:00PM",
        },
        {
          name: "Finance",
          createdAt: "2023-09-20 AT 14:30:00PM",
        },
        {
          name: "Marketing",
          createdAt: "2023-09-19 AT 8:15:00PM",
        },
        {
          name: "IT",
          createdAt: "2023-09-19 AT 8:15:00PM",
        },
        {
          name: "Sales",
          createdAt: "2023-09-19 AT 8:15:00PM",
        },
      ],
    },
  },
  getters: {
    allDepartments: (state) => state.departmentData.departments,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
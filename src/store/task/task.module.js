import Api from "@/services/Api";

const state = {
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
};

const getters = {
  getTaskData: (state) => state.taskData,
  // Add getUserData here to fetch User Ids
  //   getUserNames: (state) => state.userData.users.map((user) => user.id)
};

const mutations = {
  setTasks(state, tasks) {
    state.taskData.tasks = tasks;
  },
};

const actions = {
  // Get All Tasks Request
  async getTasks({ commit }) {
    try {
      const response = await ApiServices.getAllTasks();
      const responseData = await response.json();
      console.log(responseData.data);

      commit("setTasks", responseData.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

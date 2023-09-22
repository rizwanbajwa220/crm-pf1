import ApiServices from "@/services/Api";

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
    tasks: [],
  },
};

const getters = {
  getTaskData: (state) => state.taskData,
  // Add getUserData here to fetch User Ids
  //   getUserNames: (state) => state.userData.users.map((user) => user.id)
};

const mutations = {
  setTasks(state, tasks) {
    console.log("Received tasks data:", tasks); // Add this line for debugging
    state.taskData.tasks = tasks;
  },
  deleteTask(state, taskId) {
    state.taskData.tasks = state.taskData.tasks.filter(
      (task) => task.id !== taskId
    );
  },
};

const actions = {
  async fetchTasks({ commit }) {
    try {
      const data = await ApiServices.getAllTasks();
      commit("setTasks", data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteTask({ commit }, id) {
    try {
      // Send a request to the backend to delete the task by taskId
      await ApiServices.deleteTask(id);

      // If the delete request was successful, commit the mutation to delete the task from the store
      commit("deleteTask", id);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw new Error(error);
    }
  },
  async createTask({ commit }, taskData) {
    try {
      // Send a request to create a new task
      const response = await ApiServices.createTask(taskData);

      // If the create request was successful, commit the mutation to add the new task to the store
      commit("createTask", response.data);

      return response.data; // You can return the newly created task if needed
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error(error);
    }
  },

  // // Get All Tasks Request
  // async getTasks({ commit }) {
  //   try {
  //     const response = await ApiServices.getAllTasks();
  //     const responseData = await response.json();
  //     console.log(responseData.data);

  //     commit("setTasks", responseData.data);
  //   } catch (error) {
  //     console.error("Error fetching tasks:", error);
  //   }
  // },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

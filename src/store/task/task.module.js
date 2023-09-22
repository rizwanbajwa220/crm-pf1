import ApiServices from "@/services/Api";

// State
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

// Getters
const getters = {
  getTaskData: (state) => state.taskData,
  // Add getUserData here to fetch User Ids
  // getUserNames: (state) => state.userData.users.map((user) => user.id)
};

// Mutations
const mutations = {
  setTasks(state, tasks) {
    state.taskData.tasks = tasks;
  },
  deleteTask(state, taskId) {
    state.taskData.tasks = state.taskData.tasks.filter(
      (task) => task.id !== taskId
    );
  },
  createTask(state, newTask) {
    state.taskData.tasks.push(newTask);
  },

  updateTask(state, updatedTaskData) {
    const index = state.taskData.tasks.findIndex(
      (task) => task.id === updatedTaskData.id
    );

    if (index !== -1) {
      // Update the task in the tasks array
      state.taskData.tasks[index] = updatedTaskData;
    }
  },
};

// Actions
const actions = {
  // Fetch Tasks Action
  async fetchTasks({ commit }) {
    try {
      const data = await ApiServices.getAllTasks();
      commit("setTasks", data);
    } catch (error) {
      throw new Error(error);
    }
  },

  // Delete Task Action
  async deleteTask({ commit }, id) {
    try {
      await ApiServices.deleteTask(id);

      // If the delete request was successful, commit the mutation to delete the task from the store
      commit("deleteTask", id);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw new Error(error);
    }
  },

  // Create Task Action
  async createTask({ commit }, editedTaskData) {
    console.log("action", editedTaskData);
    try {
      // Send a request to create a new task
      const response = await ApiServices.createTask(editedTaskData);

      // If the create request was successful, commit the mutation to add the new task to the store
      commit("createTask", response.data);

      return response.data; // You can return the newly created task if needed
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error(error);
    }
  },

  // Update Task Action
  async updateTask({ commit }, { taskData }) {
    try {
      const updatedTask = await ApiServices.updateTask(taskData);

      commit("updateTask", updatedTask);
    } catch (error) {
      console.error("Error updating department:", error);

      throw new Error(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

import axios from "axios";

const BASE_URL = "http://10.0.10.34:3500/api";

const ApiServices = {
  // TASK-MANAGEMENT APIs

  // Get All Tasks
  async getAllTasks() {
    // Getting access token
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_URL}/tasks`, {
        headers: {
          // Include the token in the headers
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },

  //   Delete a Task
  async deleteTask(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${BASE_URL}/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw new Error(error);
    }
  },

  //   Create a Task
  async createTask(taskData) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BASE_URL}/tasks`,
        {
          name: taskData.name, // Use taskData.name instead of "taskData.name"
          status: taskData.status,
          comments: taskData.comments,
          user_id: taskData.user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  //   Update a Task
  async updateTask(editedTaskData) {
    const token = localStorage.getItem("token");
    console.log("editedTaskData", editedTaskData);
    const id = editedTaskData.id;

    try {
      const response = await axios.put(
        `${BASE_URL}/tasks/${id}`, // Include the task ID in the URL
        {
          name: editedTaskData.name,
          status: editedTaskData.status,
          comments: editedTaskData.comments,
          user_id: editedTaskData.user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async register(name, email, password, confirm_password) {
    try {
      const resp = await axios.post(`${BASE_URL}/users/register`, {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },

  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async fetchUsers() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/users`, {
        // send token
        headers: {
          // send token
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      alert(err);
    }
  },

  // update User
  async updateUser(id, name, email, password, confirm_password) {
    const token = localStorage.getItem("token");
    try {
      const resp = await axios.put(`${BASE_URL}/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },

  async getDepartments() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_URL}/departments`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      return response.data.data.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  
  async deleteDepartment(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${BASE_URL}/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateDepartment(id, name) {
    const token = localStorage.getItem("token");
    // console.log("id", id);
    try {
      const response = await axios.put(
        `${BASE_URL}/departments/${id}`,
        {
          // id:id,
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  register: (name, email, password, cpassword) => {
    return axios.post(`${BASE_URL}/users/register`, {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
    });
  },

  async createDepartment(name) {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${BASE_URL}/departments`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default ApiServices;

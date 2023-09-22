import axios from "axios";

const BASE_URL = "http://10.0.10.34:3500/api";

const ApiServices = {
  async getAllTasks() {
    const token = "39|vipHOT3AnURTMSGxnd0dTqEssPiFRDkD9zxlzJ0z5164e72c";
    try {
      const response = await axios.get(`${BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      console.log(response.data);
      return response.data.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
  async deleteTask(id) {
    const token = "39|vipHOT3AnURTMSGxnd0dTqEssPiFRDkD9zxlzJ0z5164e72c";
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
  async createTask(taskData) {
    const token = "39|vipHOT3AnURTMSGxnd0dTqEssPiFRDkD9zxlzJ0z5164e72c"; // Replace with your authentication token
    try {
      const response = await axios.post(`${BASE_URL}/tasks`, {
        body: taskData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error(error);
    }
  },
};

export default ApiServices;

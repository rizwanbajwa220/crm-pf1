import axios from "axios";

const BASE_URL = "http://10.0.10.230:3500/api";

const ApiServices = {
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
      const resp = await axios.put(
        `${BASE_URL}/users/${id}`,
        {
          name: name,
          email: email,
          password: password,
          confirm_password: confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async getDepartments() {
    const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
    try {
      const response = await axios.get(`${BASE_URL}/departments`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      return response.data.data; // Return the response data
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteDepartment(id) {
    const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
    try {
      const response = await axios.get(`${BASE_URL}/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      return response.data.data; // Return the response data
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateDepartment(id) {
    const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
    try {
      const response = await axios.get(`${BASE_URL}/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default ApiServices




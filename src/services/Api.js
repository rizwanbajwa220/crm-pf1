import axios from "axios";

const BASE_URL = "http://10.0.10.230:3500/api";

const ApiServices = {
  // login: async (data) => {
  //     return await axios.post(`${BASE_URL}/users/login`, data);
  // },
  //
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
};

export default ApiServices;

import axios from "axios";

const BASE_URL = "http://10.0.10.230:3500/api";

const ApiServices = {
    async login (email, password) {
        try {
            const resp = await axios.post(`${BASE_URL}/users/login`, {
                email: email,
                password: password,
            });
            return resp.data;

        } catch (err){
            alert(err);
        }
    },
    async register (name,email, password,confirm_password) {
        try {
            const resp = await axios.post(`${BASE_URL}/users/register`, {
                name: name,
                email: email,
                password: password,
                confirm_password: confirm_password,
            });
            return resp.data;

        } catch (err){
            alert(err);
        }
    },

    async fetchUsers() {
        try {
          const token = "26|4O4xWJw1qNoFq8bW5e30TIFeLK2MG6htj1SyZJSo1dafd5bb";
          // const token = localStorage.getItem("token");
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
};


export default ApiServices;

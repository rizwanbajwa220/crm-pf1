import axios from "axios";

const BASE_URL = "http://10.0.10.34:3500/api";

const ApiServices = {

    async getDepartments() {
        const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
        try {
          const response = await axios.get(`${BASE_URL}/departments`,{
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
          });
          return response.data.data; // Return the response data
        } catch (error) {
          throw new Error(error);
        }
      },

      async deleteDepartment(id){
        const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
        try {
          const response = await axios.get(`${BASE_URL}/departments/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
          });
          return response.data.data; // Return the response data
        } catch (error) {
          throw new Error(error);
        } 
      },

      async updateDepartment(id){
        const token = "14|Rdgt8MkOjlNxhkSIlD2maDHGmDduxlQeCHpDnMaDf8d8eaec";
        try {
          const response = await axios.get(`${BASE_URL}/departments/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`, 
              },
          });
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
      register: (name, email, password, cpassword) => {
        return axios.post(`${BASE_URL}/users/register`, {
          name: name,
          email: email,
          password: password,
          cpassword: cpassword,
        });
      },
      // register: async (data) => {
      //     return await axios.post(`${BASE_URL}/users/register`, data);
      // },
    
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
}

export default ApiServices




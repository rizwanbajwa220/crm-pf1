import axios from "axios";

const BASE_URL="http://10.0.10.34:3500/api";

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
      }
}

export default ApiServices
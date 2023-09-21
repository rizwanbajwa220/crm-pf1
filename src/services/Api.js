import axios from "axios";

const BASE_URL="http://10.0.10.34:3500/api";

const ApiServices = {
    async getDepartments() {
        try {
          const response = await axios.get(`${BASE_URL}/departments`);
          return response.data; // Return the response data
        } catch (error) {
          throw new Error(error);
        }
      },
}

export default ApiServices
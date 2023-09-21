import axios from "axios";

const BASE_URL = "http://10.0.10.34:3500/api";

export default ApiServices = {
    login: async (data) => {
        return await axios.post(`${BASE_URL}/users/login`, data);
    },
    login: (email, password) => {
        return axios.post(`${BASE_URL}/users/login`, {
            email: email,
            password: password,
        });
    },
    register: (name, email, password, cpassword) => {
        return axios.post(`${BASE_URL}/users/register`, {
            name: name,
            email: email,
            password: password,
            cpassword: cpassword,
        });
    },
    register: async (data) => {
        return await axios.post(`${BASE_URL}/users/register`, data);
    },
};

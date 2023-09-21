import ApiServices from '@/services/Api';

const state = {
    departmentData: {
        itemsPerPage: 5,
        headers: [
          {
            title: "Name",
            align: "center",
            key: "name",
          },
          {
            title: "Created At",
            align: "center",
            key: "createdAt",
          },
          
          {
            title: "Actions",
            align: "center",
            key: "actions",
          },
        ],
        
        departments:[],
  
    }
};

const getters = {
  allDepartments: (state) => state.departments,
  allHeaders:(state)=>state.departmentData.headers
};

const actions = {
  async fetchDepartments({ commit }) {
    try {
      const data = await ApiServices.getDepartments(); // Corrected the method name
      commit('setDepartments', data); // Pass the data to the mutation
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  setDepartments(state, departments) {
    state.departmentData.departments = departments;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
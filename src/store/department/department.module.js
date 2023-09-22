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
            key: "created_at",
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
  allDepartments: (state) => state.departmentData.departments,
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

  async deleteDepartment({ commit }, id) {

    try {
      await ApiServices.deleteDepartment(id);
      commit("deleteDepart", id);

    } catch (error) {

      console.error("Error deleting:", error);
      throw new Error(error);
    }
  },

  async deleteDepartment({ commit }, id) {

    try {
      await ApiServices.deleteDepartment(id);
      commit("updateDepart", id);

    } catch (error) {

      console.error("Error Updating:", error);
      throw new Error(error);
    }
  },


};

const mutations = {
  setDepartments(state, departments) {
    state.departmentData.departments = departments;
  },
  
  deleteDepart(state, depId) {
    state.departmentData.departments = state.departmentData.departments.filter(
      (department) => department.id !== depId
    );
  },

  updateDepart(state, updatedDepartment) {
    // Find the index of the department to be updated in the state
    const index = state.departmentData.departments.findIndex(
      (department) => department.id === updatedDepartment.id
    );

    if (index !== -1) {
      // Replace the old department data with the updated data
      state.departmentData.departments.splice(index, 1, updatedDepartment);
    }
  },

};

export default {
  state,
  getters,
  actions,
  mutations,
};
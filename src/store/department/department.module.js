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
      commit("deleteDepart", id);

    } catch (error) {

      console.error("Error Updating:", error);
      throw new Error(error);
    }
  },

  async updateDepartment({ commit }, { id, name }) {
    try {
      const response = await ApiServices.updateDepartment(id, name);
      commit("updateDepartmentName", response.data);
    } catch (error) {
      console.error("Error updating department:", error);
      throw new Error(error);
    }
  },

  
  async createDepartment({ commit }, departmentName) {
    try {
      const response = await ApiServices.createDepartment(departmentName);

      commit('addDepartments', response);
    } catch (error) {
      console.error("Error creating department:", error);
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

  addDepartments(state, newDep) {
    state.departmentData.departments.push(newDep);
  },

  updateDepartmentName(state, updatedTaskData) {

    const index = state.departmentData.departments.findIndex((d) => d.id === updatedTaskData.id);
    if (index !== -1) {
      state.departmentData.departments[index] = updatedTaskData;
    }

  },

  }


export default {
  state,
  getters,
  actions,
  mutations,
};
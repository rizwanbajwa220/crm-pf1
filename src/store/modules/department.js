

const state={
    departments: [
        {
          referenceNo: '001',
          name: 'Department 1',
          description: 'Description of Department 1',
        },
        {
          referenceNo: '002',
          name: 'Department 2',
          description: 'Description of Department 2',
        },
    ]
}

const getters={
  getDepartments:(state)=>state.departments
}


const actions={

}

const mutations={

}


export default{
    state,
    getters,
    actions,
    mutations
}
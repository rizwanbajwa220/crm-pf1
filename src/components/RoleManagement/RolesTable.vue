<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h2>Roles and permissions</h2>
        </v-col>
        <v-col cols="12" md="6">
          <RoleModal /> <!-- Calling Modal Component -->
        </v-col>
      </v-row>
  
      <v-row id="role-table">
        <!-- Left Column: Select Role -->
        <v-col cols="12" md="3" class="role-column">
          <h3 class="mb-3">Select Role</h3>
          <v-list dense>
            <v-list-item-group v-model="selectedRole">
              <v-list-item v-for="role in roles" :key="role" :value="role">{{ role }}</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
  
        <!-- Right Column: Permissions -->
        <v-col cols="12" md="9">
          <h3 class="mb-3">Permissions</h3>
          <v-row>
            <!-- First Permissions Column -->
            <v-col cols="12" md="6" density="compact">
              <v-checkbox v-for="permission in permissions1" :key="permission" :label="permission" color="primary"/>
            </v-col>
  
            <!-- Second Permissions Column -->
            <v-col cols="12" md="6">
              <v-checkbox v-for="permission in permissions2" :key="permission" :label="permission" color="primary"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import RoleModal from './RoleModal.vue';
  
  export default {
    components: {
      RoleModal,
    },
    data() {
      return {
        selectedRole: 'User',
        roles: ['User', 'Team', 'Task', 'Department'],
        permissions1: [
          'Fake duplication',
          'Age estimation',
          'Edit role',
          'View role permission',
          'Edit merchant',
          'View integration guide',
          'View user management',
          'View transactions',
          'One to one demo',
        ],
        permissions2: [
          'Perform demo',
          'View dashboard merchant',
          'Face enrollment',
          'One to many demo',
          'Delete role',
          'Add role',
          'Activate deactivate merchant',
          'Invite merchant',
        ],
        selectedPermissions: [],
      };
    },
  };
  </script>
  
<style scoped>
.role-column {
    padding: 20px;
    border-right: 1px solid #ddd;
}

.v-list-item__title {
    font-weight: bold;
}

.v-list-item-group {
    border: 1px solid #ddd;
    border-radius: 5px;
}

.v-list-item-group--active .v-list-item {
    background-color: #e6f7ff;
    border-bottom: 1px solid #ddd;
}

.v-row {
    margin-left: -10px;
    margin-right: -10px;
}

.v-col {
    padding-left: 10px;
    padding-right: 10px;
}

#role-table {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
}
</style>
  
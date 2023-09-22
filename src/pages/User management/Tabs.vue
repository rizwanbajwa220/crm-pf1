<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">All Users</v-tab>
      <v-tab value="two">Roles</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <UserManagement />
        </v-window-item>

        <v-window-item value="two"> <RolesTable /></v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
import UserManagement from "@/pages/User management/UserManagementTable";
import RolesTable from "@/components/RoleManagement/RolesTable";
export default {
  data: () => ({
    tab: null,
  }),
  components: {
    UserManagement,
    RolesTable,
  },
};
</script>

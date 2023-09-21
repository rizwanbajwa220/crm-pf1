<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">All Users</v-tab>
      <v-tab value="two">Roles</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <UserManagement
            :headers="headers"
            :items="getUsers"
            :itemsPerPage="getItemsPerPage"
            item-value="name"
        /></v-window-item>

        <v-window-item value="two"> <RolesTable /></v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import UserManagement from "@/components/common/crmTable";
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

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

//accessing store
const store = useStore();

//getting data from store
// const users = computed(() => store.state.userData.users);

const headers = computed(() => store.getters.getHeaders);
const getUsers = computed(() => store.getters.getUsers);
const getItemsPerPage = computed(() => store.getters.getItemsPerPage);
onMounted(() => {
  store.dispatch("fetchUsers");
});
</script>

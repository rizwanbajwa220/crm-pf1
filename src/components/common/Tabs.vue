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
            :items="users"
            :itemsPerPage="itemsPerPage"
            item-value="name"
        /></v-window-item>

        <v-window-item value="two"> Two </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import UserManagement from "@/components/common/crmTable";
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

//accessing store
const store = useStore();

//getting data from store
const itemsPerPage = computed(() => store.state.userData.itemsPerPage);
const headers = computed(() => store.state.userData.headers);
const users = computed(() => store.state.userData.users);
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list :items="items">
        <template v-slot:prepend="{ item }">
          <v-list-item @click="selectItem(item)">
            <v-list-item-icon>
              <v-icon class="icon-style">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{
        selectedItem ? selectedItem.title : "User Management"
      }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <UserManagement
        :headers="headers"
        :items="users"
        :itemsPerPage="itemsPerPage"
        item-value="name"
      />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
import UserManagement from "@/components/User management/crmTable";
export default {
  data: () => ({
    drawer: null,
    selectedItem: null,
    items: [
      {
        title: "User Management",
        // add icon
        icon: "mdi-account",
        value: 1,
      },
      {
        title: "Task Management",
        icon: "mdi-account",
        value: 2,
      },
      {
        title: "Role Management",
        icon: "mdi-account",
        value: 3,
      },
    ],
    itemsPerPage: 7,
    headers: [
      {
        title: "First Name",
        align: "start",
        sortable: false,
        key: "name",
      },
      { title: "Last Name", align: "center", key: "lastName" },
      { title: "Email", align: "center", key: "Email" },
      { title: "Role", align: "center", key: "role" },
      { title: "Actions", align: "center", key: "Actions" },
    ],
    users: [
      {
        name: "Kashif",
        lastName: "Saleem",
        Email: "kashif@example.com",
        role: "Admin",
        Actions: [
          { icon: "mdi-pencil", color: "primary" },
          { icon: "mdi-delete", color: "error" },
        ],
      },
      {
        name: "Kashif",
        lastName: "Saleem",
        Email: "kashif@example.com",
        role: "Admin",
        Actions: [
          { icon: "mdi-pencil", color: "primary" },
          { icon: "mdi-delete", color: "error" },
        ],
      },
      {
        name: "Kashif",
        lastName: "Saleem",
        Email: "kashif@example.com",
        role: "Admin",
        Actions: [
          { icon: "mdi-pencil", color: "primary" },
          { icon: "mdi-delete", color: "error" },
        ],
      },
      {
        name: "Kashif",
        lastName: "Saleem",
        Email: "kashif@example.com",
        role: "Admin",
        Actions: [
          { icon: "mdi-pencil", color: "primary" },
          { icon: "mdi-delete", color: "error" },
        ],
      },
      {
        name: "Kashif",
        lastName: "Saleem",
        Email: "kashif@example.com",
        role: "Admin",
        Actions: [
          { icon: "mdi-pencil", color: "primary" },
          { icon: "mdi-delete", color: "error" },
        ],
      },
    ],
  }),
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.drawer = false; // Close the drawer when an item is selected (optional)
    },
  },
};
</script>

<style scoped>
.icon-style {
  margin-right: 5px;
}
</style>

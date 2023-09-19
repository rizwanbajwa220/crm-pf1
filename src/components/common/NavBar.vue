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
      <UserManagement :FirstName="UserData" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
import UserManagement from "@/components/User management/UserManagement";
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

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list :items="items">
        <template v-slot:prepend="{ item }">
          <v-list-item-icon>
            <v-icon class="icon-style">{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main> Hello </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({
    drawer: null,
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
};
</script>

<style scoped>
.icon-style {
  margin-right: 10px;
}
</style>

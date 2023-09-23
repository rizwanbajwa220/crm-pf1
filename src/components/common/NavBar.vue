<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        src="@/assets/logo.svg"
        class="ml-7 my-3"
        width="142px"
        height="45px"
      ></v-img>
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ selectedMenuItem }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./SideBar.vue";
import ChatBox from "../ChatBox.vue";
import UserManagement from "@/pages/User management/UserManagement.vue";
import Department from "@/pages/Department.vue";
import TaskManagementPage from "@/pages/TaskManagementPage.vue";

export default {
  data: () => ({
    drawer: null,
    selectedMenuItem: "Application", 
  }),
  
  components: {
    ChatBox,
    SideBar,
    UserManagement,
    Department,
    TaskManagementPage,
  },
};
</script>

<style scoped>
.icon-style {
  margin-right: 5px;
}
</style>

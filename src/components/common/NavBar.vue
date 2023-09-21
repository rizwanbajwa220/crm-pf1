<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <v-img
        src="@/assets/logo.svg"
        class="ml-7 my-3"
        width="142px"
        height="45px"
      ></v-img>
      <SideBarItems/>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <ChatBox />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import ChatBox from "../ChatBox.vue";
import SideBarItems from "../common/SideBar.vue"

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({ drawer: null }),

  components: {
    ChatBox,
    SideBarItems, 
  },
};
</script>

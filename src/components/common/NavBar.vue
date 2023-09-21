<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        src="@/assets/logo.svg"
        class="ml-7 my-3"
        width="142px"
        height="45px"
      ></v-img>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import Chatbox from "../ChatBox.vue"
</script>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    selectItem(item) {
      this.selectedItem = item.title;
      this.drawer = false; // Close the drawer when an item is selected (optional)
      console.log("clicked", item);
    },
  },
  components: {
    Chatbox
  },
};
</script>

<style scoped>
.icon-style {
    margin-right: 5px;
}
</style>

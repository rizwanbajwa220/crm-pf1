<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img src="@/assets/logo.svg" class="ml-7 my-3" width="142px" height="45px"></v-img>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-row justify="end" class="pa-5">
        <v-menu min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar icon="mdi-account" size="md" />
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="text-center mx-auto">
                <v-btn rounded size="xs-small" variant="text" prepend-icon="mdi-arrow-right" color="primary"
                  @click="logout">
                  Logout
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-row>
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
    logout() {
      // Remove the token from local storage (you may replace 'token' with the actual key)
      localStorage.removeItem('token');

      // Navigate to the login page
      this.$router.push({ path: '/' }); // Replace 'login' with the name of your login route
    },
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
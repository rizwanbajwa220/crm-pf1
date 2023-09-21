<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <v-list :items="items">
        <template v-slot:prepend="{ item }">
          <v-list-item @click="selectItem(item)">
            <v-list-item-icon>
              <v-icon class="icon-style">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content> </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{
        selectedItem ? selectedItem : "User Management"
      }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <TaskManagementPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

//accessing store
const store = useStore();

//getting data from store
const itemsPerPage = computed(() => store.state.userData.itemsPerPage);
const headers = computed(() => store.state.userData.headers);
const users = computed(() => store.state.userData.users);

const drawer = ref(null);
</script>

<script>
import TaskManagementPage from "../../pages/TaskManagementPage.vue";

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
      this.selectedItem = item.title;
      this.drawer = false; // Close the drawer when an item is selected (optional)
      console.log("clicked", item);
    },
  },
  components: {
    TaskManagementPage,
  },
};
</script>

<style scoped>
.icon-style {
  margin-right: 5px;
}
</style>

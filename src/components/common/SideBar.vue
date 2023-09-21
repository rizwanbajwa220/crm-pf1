<template>
      <div class="pb-2 pt-5">
        <v-list id="side-nav">
          <v-list-item-group>
            <v-list-item
              class="pl-3"
              v-for="(item, index) in navbarItems"
              :key="index"
            >
              <router-link :to="item.attrs.to" :class="getNavItemClasses(item)">
                <v-icon>{{ item.icon }}</v-icon>
                <span class="pl-2">{{ item.title }} </span>
              </router-link>
              <v-divider class="py-3"></v-divider>
            </v-list-item>
          </v-list-item-group>
          <v-spacer></v-spacer>
          <v-list-item>
            <div style="cursor: pointer" @click="logout">
              <v-btn>
                <v-icon>mdi-wrench</v-icon>
                <span class="pl-2">Logout</span>
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </div>
</template>

<script>
import { navbarItems } from "@/constant/global.js";
export default {
  name: "Sidebar",
  data() {
    return {
      navbarItems: navbarItems,
    };
  },
  methods: {
    logout() {},
    getNavItemClasses(item) {
      const classes = {
        "nav-item": true,
      };
      if (window.innerWidth < 768) {
        classes["responsive-class"] = true;
      } else {
        classes["non-responsive-class"] = true;
      }

      if (item.attrs.to === this.$route.path) {
        classes["active-class"] = true;
      }

      return classes;
    },
  },
};
</script>
<style scoped>
#side-nav a {
  text-decoration: none;
}
</style>

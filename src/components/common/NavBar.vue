<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
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
        <Department />

    </v-main>
</v-app>
</template>

<script>
import {
    ref,
    computed
} from "vue";
import {
    useStore
} from "vuex";
import Department from "@/pages/Department.vue";


// Accessing the store
const store = useStore();

// Getting data from the store
const itemsPerPage = computed(() => store.state.departmentData.itemsPerPage);
const headers = computed(() => store.state.departmentData.headers);
const departments = computed(() => store.state.departmentData.departments);

const drawer = ref(null);

export default {
    data: () => ({
        drawer: null,
        selectedItem: null,
        items: [{
                title: "Department Management",
                icon: "mdi-office-building",
                value: 1,
            },
            {
                title: "Task Management",
                icon: "mdi-format-list-bulleted",
                value: 2,
            },
            {
                title: "Role Management",
                icon: "mdi-account-key",
                value: 3,
            },
        ],
    }),
    methods: {
        selectItem(item) {
            this.selectedItem = item.title;
            this.drawer = false;
            console.log("clicked", item);
        },
    },
    components: {
        Department,
    },
};
</script>

<style scoped>
.icon-style {
    margin-right: 5px;
}
</style>

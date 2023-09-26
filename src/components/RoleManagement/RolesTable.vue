<template>
  {{ console.log(selectedPermissions) }}
  <v-row>
    <v-col cols="12" md="6" density="compact">
      <h2>Roles and permissions</h2>
    </v-col>
    <v-col cols="12" md="6" density="compact">
      <RoleModal />
      <!-- Calling Modal Component -->
    </v-col>
  </v-row>

  <v-row id="role-table">
    <!-- Left Column: Select Role -->
    <v-col cols="12" md="3" class="role-column" density="compact">
      <h3 class="mb-3">Select Role</h3>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="role in roles"
            :key="role"
            :value="role"
            @click="updateSelectedRole(role)"
            >{{ role }}</v-list-item
          >
        </v-list-item-group>
      </v-list>
    </v-col>

    <!-- Right Column: Permissions -->
    <v-col cols="12" md="9">
      <div class="d-flex justify-space-between pt-1">
        <h3 class="">Permissions</h3>

        <div class="d-flex align-center justify-center">
          <v-checkbox
            color="primary"
            label="Select All"
            density="compact"
            class="me-5"
            @click="selectAllPermissions"
            v-model="selectAllChecked"
          ></v-checkbox>
          <span @click="SavePermission" class="mb-7 pointer">Save</span>
        </div>
      </div>

      <v-row>
        <!-- First Permissions Column -->
        <v-col cols="12" md="6" density="compact">
          <v-checkbox
            density="compact"
            v-for="permission in firstHalfArray"
            :key="permission"
            :label="permission"
            color="primary"
            :value="permission"
            v-model="selectedPermissions"
          />
        </v-col>

        <!-- Second Permissions Column -->
        <v-col cols="12" md="6" density="compact">
          <v-checkbox
            density="compact"
            v-for="permission in secondHalfArray"
            :key="permission"
            :label="permission"
            color="primary"
            :value="permission"
            v-model="selectedPermissions"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import RoleModal from "./RoleModal.vue";
import { SideBarItems } from "@/constant/global";
import { mapGetters } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// console.log(SideBarItems.items.map((item) => item.userPermissions[0]));
// console.log(SideBarItems.items.map((item) => item.userPermissions));
// console.log(selectedRole);
export default {
  setup() {
    const notify = (message) => {
      toast(message, {
        autoClose: 1000,
        position: "top-center",
      }); // ToastOptions
    };
    return { notify };
  },
  components: {
    RoleModal,
  },
  data() {
    return {
      selectedRole: "User",
      roles: ["User Managment", "Teams", "Tasks", "Department"],
      selectedPermissions: ["can-access-all-users"],
      selectAllChecked: false,
    };
  },
  computed: {
    ...mapGetters(["getPermissions"]),
    firstHalfArray() {
      const middleIndex = Math.ceil(this.getPermissions.length / 2);
      // return only half of the array
      const halfArray = [];
      for (let i = 0; i < middleIndex; i++) {
        halfArray.push(this.getPermissions[i]);
      }
      return halfArray;
    },
    secondHalfArray() {
      const middleIndex = Math.ceil(this.getPermissions.length / 2);
      const secondHalfArray = [];
      for (let i = middleIndex; i < this.getPermissions.length; i++) {
        secondHalfArray.push(this.getPermissions[i]);
      }
      return secondHalfArray;
    },
    // Computed property to return the permissions for the selected role
    computedPermissions() {
      const selectedRole = this.selectedRole;
      const matchedItem = SideBarItems.items.find(
        (item) => item.title === selectedRole
      );
      const permissions = matchedItem ? matchedItem.userPermissions : [];
      //Initializes selectedPermissions based on computedPermissions for the initially selected role
      this.selectedPermissions = permissions.slice();
      console.log(permissions);
      return permissions;
    },
  },
  methods: {
    SavePermission() {
      // console.log("Selected Permissions: ", this.selectedPermissions);
      // show toast
      this.notify("Permissions Saved");
    },
    //update the selected role
    updateSelectedRole(role) {
      this.selectedRole = role;
      this.selectedPermissions = this.computedPermissions.slice();
    },
    selectAllPermissions() {
      this.selectAllChecked = !this.selectAllChecked;
      if (this.selectAllChecked === true) {
        this.selectedPermissions = this.getPermissions.slice();
      }
    },
  },
  // add on mount
  mounted() {
    // set the selected role to the first role in the roles array
    this.selectedRole = this.roles[0];
    // set the selected permissions to the permissions for the first role in the roles array
    this.selectedPermissions = this.computedPermissions.slice();
  },
};
</script>

<style scoped>
.role-column {
  padding: 20px;
  border-right: 1px solid #ddd;
}

.v-list-item__title {
  font-weight: bold;
}

.v-list-item-group {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.v-list-item-group--active .v-list-item {
  background-color: #e6f7ff;
  border-bottom: 1px solid #ddd;
}

.v-row {
  margin-left: -10px;
  margin-right: -10px;
}

.v-col {
  padding-left: 10px;
  padding-right: 10px;
}

#role-table {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}

.pointer {
  transition: all 0.3s ease-in-out;
  color: gray;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 5px;
}

.pointer:hover {
  cursor: pointer;
  color: black;
  transform: scale(1.1);
}
</style>

<template>
  <v-data-table
    :headers="getHeaders"
    :items="getUsers"
    :items-per-page="getItemsPerPage"
    :sort-by="[{ key: 'description', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat v-if="getUsers">
        <v-toolbar-title>All Users</v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                      :readonly="readonlyEmail"
                    ></v-text-field>
                    <v-text-field
                      v-model="editedItem.password"
                      label="Password"
                    ></v-text-field>
                    <v-text-field
                      v-model="editedItem.confirm_password"
                      label="Confirm Password"
                    ></v-text-field>
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
                          <span @click="SavePermission" class="mb-7 pointer"
                            >Save</span
                          >
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
                  </v-col>

                  <v-col cols="12" sm="6" md="4"> </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>

              <v-btn color="blue-darken-1" variant="text" @click="save()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h7 text-center" style="font-size: 18px"
              >Are you sure you want to delete this item?</v-card-title
            >

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >

              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >OK</v-btn
              >

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
        color="blue"
      >
        mdi-pencil
      </v-icon>

      <v-icon size="small" @click="deleteItem(item.raw)" color="red">
        mdi-delete
      </v-icon>
    </template>
    <!-- <div class="d-flex justify-center align-center">
      <v-progress-circular
        v-if="getIsLoading"
        indeterminate
        size="36"
        color="primary"
        class="my-5"
      ></v-progress-circular>
      <div
        v-if="getError && !getIsLoading && !getUsers"
        color="red"
        class="my-5 text-h6 red"
      >
        {{ getError }}
      </div>
    </div> -->
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { SideBarItems } from "@/constant/global";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    selectedPermissions: ["can-access-all-users"],
    editedItem: {
      name: "",
      createdAt: "",
      actions: [
        {
          icon: "mdi-pencil",
          color: "primary",
        },
        {
          icon: "mdi-delete",
          color: "error",
        },
      ],
    },
    defaultItem: {
      name: "",
      createdAt: "",
      actions: [
        {
          icon: "mdi-pencil",
          color: "primary",
        },
        {
          icon: "mdi-delete",
          color: "error",
        },
      ],
    },
    readonlyEmail: false, // Add this property
    selectAllChecked: false,
  }),
  computed: {
    ...mapGetters([
      "getUsers",
      "getHeaders",
      "getItemsPerPage",
      "getIsLoading",
      "getError",
      "getPermissions",
    ]),
    headers() {
      return this.getHeaders;
    },
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
    formTitle() {
      return this.editedIndex === -1 ? "Create User" : "Edit User";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapActions(["fetchUsers", "updateUser"]),
    selectAllPermissions() {
      this.selectAllChecked = !this.selectAllChecked;
      if (this.selectAllChecked === true) {
        this.selectedPermissions = this.getPermissions.slice();
      }
    },
    editItem(item) {
      // use the updateuser action to update the user
      this.readonlyEmail = true; // Set email field as readonly
      this.editedIndex = this.getUsers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.getUsers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.getUsers.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.readonlyEmail = false;
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        const payload = {
          id: this.editedItem.id,
          name: this.editedItem.name,
          email: this.editedItem.email,
          password: this.editedItem.password,
          confirm_password: this.editedItem.confirm_password,
        };
        console.log(payload);
        this.updateUser(payload);
        Object.assign(this.getUsers[this.editedIndex], this.editedItem);
      } else {
        this.getUsers.push(this.editedItem);
      }
      this.close();
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

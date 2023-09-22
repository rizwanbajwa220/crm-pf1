<template>
  <v-data-table :headers="headers" :items="tasks" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>TASK MANAGEMENT</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <!-- Add-Task Dialogue Box -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <!-- Add-Task Button -->
            <v-btn
              prepend-icon="mdi-plus-circle"
              color="primary"
              dark
              class="mb-2"
              rounded="xl"
              v-bind="props"
            >
              Add Task
            </v-btn>
          </template>

          <!-- Add Task Form -->
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
                      label="Task Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.status"
                      :items="statusOptions"
                      label="Status"
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.user_id"
                      :items="userNames"
                      label="User ID"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.comments"
                      label="Comments"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Delete-Task Dialogue Box -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
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

    <!-- Showing Edit & Delete Buttons in the Table -->
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
        color="primary"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)" color="red">
        mdi-delete
      </v-icon>
    </template>

    <!-- Adding color to Status field -->
    <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.columns.status)">
        {{ item.columns.status }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    statusOptions: ["Active", "Rejected", "Pending"],
    userNames: ["Haris", "Kashif", "Usman"],
    editedIndex: -1,
    editedItem: {
      name: "",
      status: "",
      user_id: "",
      comments: "",
      id: "",
    },
    defaultItem: {
      name: "",
      status: "",
      user_id: "",
      comments: "",
      id: "",
    },
  }),

  computed: {
    ...mapGetters(["getTaskData"]),
    formTitle() {
      return this.editedIndex === -1 ? "Create Task" : "Edit Item";
    },
    headers() {
      // Accessing headers from store
      return this.getTaskData.headers;
    },
    tasks() {
      // Accessing tasks from store
      return this.getTaskData.tasks;
    },
    // userNames() {
    //   // Accessing usernames from store
    //   return this.getUserNames;
    // },
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
    ...mapActions(["fetchTasks", "deleteTask", "createTask"]),

    getColor(status) {
      if (status == "Active") return "green";
      else if (status == "Pending") return "blue";
      else return "red";
    },

    editItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      try {
        // Call the deleteTask action with the taskId of the item to delete
        await this.$store.dispatch("deleteTask", this.editedItem.id);
        this.closeDelete();
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },

    close() {
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

    async save() {
      try {
        if (this.editedIndex > -1) {
          // Edit existing task (not shown here, use the existing logic)
        } else {
          // Create a new task
          const newTaskData = {
            name: this.editedItem.name,
            status: this.editedItem.status,
            user_id: this.editedItem.user_id,
            comments: this.editedItem.comments,
          };

          // Call the createTask action to create a new task
          console.log(newTaskData);
          await this.createTask(newTaskData);

          // Optionally, you can clear the form or close the dialog
          this.close();
        }
      } catch (error) {
        console.error("Error saving task:", error);
        // Handle the error as needed (e.g., show a message to the user)
      }
    },
  },

  mounted() {
    // Calling the action to fetch tasks when the component is created
    this.fetchTasks();
  },
};
</script>

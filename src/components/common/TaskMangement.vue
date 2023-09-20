<template>
  <div>
    <!-- Add Task Button -->
    <div class="add-button-container">
      <v-btn
        @click="showAddTaskDialog = true"
        prepend-icon="mdi-plus"
        color="success"
        rounded="xl"
      >
        Add Task
      </v-btn>
    </div>

    <!-- Create Task Dialog -->
    <v-dialog v-model="showAddTaskDialog" max-width="600">
      <v-card>
        <v-card-title>
          Create Task
          <v-icon
            @click="showAddTaskDialog = false"
            class="bold-icon right-icon"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="createTask">
            <v-text-field
              v-model="newTask.name"
              label="Task Title"
            ></v-text-field>
            <v-textarea
              v-model="newTask.description"
              label="Task Description"
            ></v-textarea>
            <v-select
              v-model="newTask.assignees"
              :items="assigneeNames"
              label="Assignees"
            ></v-select>
            <v-textarea
              v-model="newTask.comments"
              label="Comments"
            ></v-textarea>
            <v-btn type="submit" color="success" class="right-icon"
              >Create</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="tasks"
      item-value="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAddTaskDialog: false,
      newTask: {
        name: "",
        description: "",
        assignees: "",
        comments: "",
      },
      assigneeNames: ["Assignee 1", "Assignee 2", "Assignee 3"],
      itemsPerPage: 5,
      headers: [
        {
          title: "Task Title",
          align: "start",
          sortable: false,
          key: "name",
          align: "center",
        },
        {
          title: "Description",
          sortable: false,
          align: "center",
          key: "description",
        },
        {
          title: "Assignees",
          sortable: false,
          align: "center",
          key: "assignees",
          width: "200",
        },
        {
          title: "Comments",
          sortable: false,
          align: "center",
          key: "comments",
          width: "300",
        },
      ],
      tasks: [
        {
          name: "Dummy Activity",
          description:
            "Dummy Activity is a hypothetical activity which requires zero time and zero resources for completion.",
          assignees: "Haris",
          comments: "Pls do code refactor at the end.",
        },
        {
          name: "Dummy Activity",
          description:
            "Dummy Activity is a hypothetical activity which requires zero time and zero resources for completion.",
          assignees: "Haris",
          comments: "Pls do code refactor at the end.",
        },
        {
          name: "Dummy Activity",
          description:
            "Dummy Activity is a hypothetical activity which requires zero time and zero resources for completion.",
          assignees: "Haris",
          comments: "Pls do code refactor at the end.",
        },
      ],
    };
  },
  methods: {
    createTask() {
      // Add a new task to the tasks array with the provided data.
      this.tasks.push({ ...this.newTask });

      // Clear the input fields and close the dialog
      this.newTask = {
        name: "",
        description: "",
        assignees: "",
        comments: "",
      };
      this.showAddTaskDialog = false;
    },
  },
};
</script>

<style>
.add-button-container {
  text-align: right;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
}

.close-button-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.bold-icon {
  font-weight: bold;
  cursor: pointer;
}

.right-icon {
  float: right;
}
</style>

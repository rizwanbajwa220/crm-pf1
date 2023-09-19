<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="User"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "UserManagement",
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: "First Name",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "Last Name", align: "center", key: "lastName" },
        { title: "Email", align: "center", key: "Email" },
        { title: "Role", align: "center", key: "role" },
        { title: "Actions", align: "center", key: "Actions" },
      ],
      User: [
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
        {
          name: "Kashif",
          lastName: "Saleem",
          Email: "kashif@example.com",
          role: "Admin",
          Actions: [
            { icon: "mdi-pencil", color: "primary" },
            { icon: "mdi-delete", color: "error" },
          ],
        },
      ],
    };
  },
};
</script>

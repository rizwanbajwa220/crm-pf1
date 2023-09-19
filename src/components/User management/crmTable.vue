<template>
  <v-data-table
    v-bind:items-per-page="itemsPerPage"
    :headers="headers"
    :items="items"
    item-value="itemValue"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "UserManagement",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    itemValue: {
      type: String,
      default: "name",
    },
  },
};
</script>

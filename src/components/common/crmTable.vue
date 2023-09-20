<template>
  <AddButton />
  <v-data-table
    v-bind:items-per-page="itemsPerPage"
    :headers="headers"
    :items="items"
    item-value="itemValue"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import AddButton from "@/pages/User management/AddButon";
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
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    AddButton,
  },
};
</script>

<style scoped>
.dialog-box {
  margin: 1vw 1vw 0 0;
}
</style>

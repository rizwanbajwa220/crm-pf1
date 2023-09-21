<template>
    {{ console.log('deeee',allDepartments) }}
<v-data-table :headers="allHeaders" :items="allDepartments" :sort-by="[{ key: 'description', order: 'asc' }]" class="elevation-1">

    <template v-slot:top>

        <v-toolbar flat>

            <v-toolbar-title>Departments</v-toolbar-title>

            <v-divider class="mx-4" inset vertical></v-divider>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="500px">

                <template v-slot:activator="{ props }">

                    <v-btn prepend-icon="mdi-plus-circle" color="white" dark class="mb-2" rounded="xl" v-bind="props" style="background-color: blue;">

                        Add New

                    </v-btn>

                </template>

                <v-card>

                    <v-card-title>

                        <span class="text-h5">{{ formTitle }}</span>

                    </v-card-title>

                    <v-card-text>

                        <v-container>

                            <v-row>

                                <v-col cols="12">

                                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>

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

                        <v-btn color="blue-darken-1" variant="text" @click="save">

                            Save

                        </v-btn>

                    </v-card-actions>

                </v-card>

            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="500px">

                <v-card>

                    <v-card-title class="text-h7 text-center" style="font-size: 18px;">Are you sure you want to delete this item?</v-card-title>

                    <v-card-actions>

                        <v-spacer></v-spacer>

                        <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>

                        <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>

                        <v-spacer></v-spacer>

                    </v-card-actions>

                </v-card>

            </v-dialog>

        </v-toolbar>

    </template>

    <template v-slot:item.actions="{ item }">

        <v-icon size="small" class="me-2" @click="editItem(item.raw)" color="blue">

            mdi-pencil

        </v-icon>

        <v-icon size="small" @click="deleteItem(item.raw)" color="red"> mdi-delete </v-icon>

    </template>

</v-data-table>
</template>

    
<script>
import {
    mapGetters,
    mapActions
} from "vuex";

export default {

    data: () => ({
        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
            name: "",
            createdAt: "",
            actions: [{
                    icon: "mdi-pencil",
                    color: "primary"
                },
                {
                    icon: "mdi-delete",
                    color: "error"
                },
            ],
        },
        defaultItem: {
            name: "",
            createdAt: "",
            actions: [{
                    icon: "mdi-pencil",
                    color: "primary"
                },
                {
                    icon: "mdi-delete",
                    color: "error"
                },
            ],
        },
    }),

    computed: {
        ...mapGetters(["allDepartments", "allHeaders"]),
        
        formTitle() {
            return this.editedIndex === -1 ? "Create Department" : "Edit Department";
        },
        headers() {
            return this.$store.state.departmentData.headers;
        },
        departments() {
            return this.departments = this.allDepartments
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
        ...mapActions(['fetchDepartments']),

        formatDate(dateString) {
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        editItem(item) {
            this.editedIndex = this.departments.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.departments.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.departments.splice(this.editedIndex, 1);
            this.closeDelete();
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

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.departments[this.editedIndex], this.editedItem);
            } else {
                this.departments.push(this.editedItem);
            }
            this.close();
        },
    },
    mounted(){
        this.fetchDepartments()
    },

};
</script>

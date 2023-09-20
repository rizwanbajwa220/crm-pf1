<template>
    <div class="text-right">
        <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ props }">
                <v-btn color="blue-darken-1" v-bind="props" prepend-icon="mdi-check-circle">
                    Add New Role
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Add new role</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field label="Role Name" required></v-text-field>
                            </v-col>
                        </v-row>
                        <h4>Permissions</h4>
                        <v-row>
                            <!-- First Permissions Column -->
                            <v-col cols="12" md="6" density="compact">
                                <v-checkbox v-for="permission in permissions1" :key="permission" :label="permission"
                                    color="primary" />
                            </v-col>

                            <!-- Second Permissions Column -->
                            <v-col cols="12" md="6">
                                <v-checkbox v-for="permission in permissions2" :key="permission" :label="permission"
                                    color="primary" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Add Role
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
      return {
        dialog: false,
        permissions1: [
          'Fake duplication',
          'Age estimation',
          'Edit role',
          'View role permission',
          'Edit merchant',
          'View integration guide',
          'View user management',
          'View transactions',
          'One to one demo',
        ],
        permissions2: [
          'Perform demo',
          'View dashboard merchant',
          'Face enrollment',
          'One to many demo',
          'Delete role',
          'Add role',
          'Activate deactivate merchant',
          'Invite merchant',
        ],
        selectedPermissions: [],
      };
    },
};
</script>

<style></style>
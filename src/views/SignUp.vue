<template>
    <v-row>
        <!-- Left Column: Image -->
        <v-col cols="12" lg="5" class="d-none d-md-block">
            <div class="">
                <img src="../assets/signup.jpg" alt="Sign Up Image" class="signup-image" />
            </div>
        </v-col>

        <!-- Right Column: Login Form -->
        <v-col cols="12" lg="7">
            <div class="custom-padding">
                <h3 class="text-h5 font-weight-medium">Sign Up</h3>
                <p class="mt-2 text-grey">Enter your credientials to create your account</p>

                <v-form class="py-5" @submit.prevent="signup">
                    <div class="text-subtitle-1 text-medium-emphasis">Name</div>
                    <v-text-field density="compact" placeholder="Enter Name" append-inner-icon="mdi-account-outline"
                        variant="outlined" v-model="name" :rules="nameRules"></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                    <v-text-field density="compact" placeholder="Enter Email" append-inner-icon="mdi-email-outline"
                        variant="outlined" v-model="email" :rules="emailRules"></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password
                    </div>
                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                        variant="outlined" @click:append-inner="visible = !visible" v-model="password"
                        :rules="passwordRules">
                    </v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Confirm Password
                    </div>

                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your confirm password"
                        variant="outlined" @click:append-inner="visible = !visible" v-model="confirm_password"
                        :rules="cpasswordRules"></v-text-field>

                    <!-- For displaying error message -->
                    <div v-if="error" class="text-red text-body-2">{{ error }}</div>

                    <v-btn block color="blue-accent-4" size="large" type="submit">
                        Sign Up
                    </v-btn>

                    <div class="justify-center d-flex mt-2">Already Registered?<router-link to="/"
                            class="text-blue ml-1">Login</router-link></div>

                </v-form>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            visible: false,
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            error: '',
            nameRules: [
                value => {
                    if (value?.length > 1) return true

                    return 'Name can not be empty.'
                },
            ],
            emailRules: [
                value => {
                    if (value?.length > 1) return true

                    return 'Email can not be empty.'
                },
            ],
            passwordRules: [
                value => {
                    if (value?.length > 1) return true

                    return 'Password can not be empty.'
                },
            ],
            cpasswordRules: [
                value => {
                    if (value?.length > 1) return true

                    return 'Confirm Password can not be empty.'
                },
            ],
        };
    },
    computed:{
        ...mapGetters(['setRegisterUser'])
    },
    methods: {
        ...mapActions(['registerUser']),

        async signup() {
            await this.registerUser({ name:this.name, email: this.email, password: this.password, confirm_password:this.confirm_password });

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(this.email)) {
                this.error = "Invalid email format";
                return; // Exit the method to prevent further execution
            }
            if (this.password !== this.confirm_password) {
                this.error = "Passwords do not match";
                return; // Exit the method to prevent further execution
            }
            if (this.name == '' || this.email == '' || this.password == '' || this.confirm_password == '') {
                this.error = "Fill all fields";
                return; // Exit the method to prevent further execution
            }

            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
            };
            this.$router.push({ path: '/' });
            console.log('Form Data:', formData);
            this.error = '';
        },
    },
};
</script>
  
<style scoped>
.image-container {
    height: 100vh;
    width: 100%;
}

.custom-padding {
    padding-top: 25px;
    /* padding-bottom: 50px; */
    padding-left: 150px;
    padding-right: 150px;
}

.signup-image {
    max-width: 100%;
    max-height: 100%;
}

/* Center the card on small screens */
@media (max-width: 768px) {
    .v-col {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .d-none {
        display: none !important;
    }

    .custom-padding {
        padding: 20px;
    }
}
</style>
  
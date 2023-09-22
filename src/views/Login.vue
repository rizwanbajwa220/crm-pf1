<template>
    <v-row>
        <!-- Left Column: Image -->
        <v-col cols="12" lg="5" class="d-none d-md-block">
            <div class="">
                <img src="../assets/login.jpg" alt="Login Image" class="login-image" />
            </div>
        </v-col>

        <!-- Right Column: Login Form -->
        <v-col cols="12" lg="7">
            <div class="custom-padding">
                <h3 class="text-h5 font-weight-medium">Login</h3>
                <p class="mt-2 text-grey">Enter your credientials to access your account</p>

                <v-form class="py-8" @submit.prevent="login">
                    <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                    <v-text-field density="compact" placeholder="Enter Email" append-inner-icon="mdi-email-outline"
                        variant="outlined" v-model="email" :rules="emailRules"></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password
                    </div>

                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                        variant="outlined" @click:append-inner="visible = !visible" v-model="password"
                        :rules="passwordRules"></v-text-field>

                    <div v-if="error" class="text-red text-body-2">{{ error }}</div>

                    <a class="text-caption text-blue" href="#" rel="noopener noreferrer" target="_blank">
                        Forgot Password?</a>

                    <v-btn block class="mt-8" color="blue-accent-4" size="large" type="submit">
                        Login
                    </v-btn>

                    <div class="justify-center d-flex mt-5">Don't have an account?<router-link to="/signup"
                            class="text-blue ml-1">Sign up</router-link></div>

                </v-form>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        error: '',
        visible: false,
        email: '',
        password: '',

        emailRules: [
            value => {
                if (value?.length > 1) return true

                return 'Email can not be empty.'
            },
        ],
        passwordRules: [
            value => {
                if (value?.length > 1) return true

                return 'Password can not be empty'
            },
        ],
    }),

    computed:{
        ...mapGetters(['setLoginUser'])
    },
   
    methods: {
        ...mapActions(['loginUser']),

        async login() {
            await this.loginUser({ email: this.email, password: this.password });
            
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(this.email)) {
                this.error = "Invalid email format";
                return; // Exit the method to prevent further execution
            }
            if (this.email == '' || this.password == '') {
                this.error = "Fill all fields";
                return;
            }
            const formData = {
                email: this.email,
                password: this.password,
            };
            this.error = '';

            
            console.log('Form Data:', formData);
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
    padding-top: 100px;
    /* padding-bottom: 50px; */
    padding-left: 150px;
    padding-right: 150px;
}

.login-image {
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
  
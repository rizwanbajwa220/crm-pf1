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
                <p class="mt-2">Enter your credientials to access your account</p>

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

                    <div v-if="error" class="error-message">{{ error }}</div>

                    <a class="text-caption text-blue" href="#" rel="noopener noreferrer" target="_blank">
                        Forgot Password?</a>

                    <v-btn block class="mt-8" color="blue-accent-4" size="large" type="submit">
                        Login
                    </v-btn>
                </v-form>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    data: () => ({
        error: '',
        visible: false,
        email: '',
        emailRules: [
            value => {
                if (value?.length > 1) return true

                return 'Email can not be empty.'
            },
        ],
        password: '',
        passwordRules: [
            value => {
                if (value?.length > 1) return true

                return 'Password can not be empty'
            },
        ],
    }),
    methods: {
        login() {
            if(this.email==''||this.password==''){
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

p {
    color: #CFD8DC;
}
.error-message {
    color: red;
    font-size: 14px;
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
        /* Override the padding */
    }
}
</style>
  
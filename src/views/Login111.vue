<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                                required
                                v-model="password"
                                :rules="passwordRules"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            >Login</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline"
                    >Please wait, user logging in...</v-card-title
                >
                <v-card-text>Do you like fuze?</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        <v-progress-linear
                            indeterminate
                            color="red"
                            class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                    <!-- <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name: 'Signin',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ],
            dialog: false
        };
    },
    methods: {
        sendLoginRequest() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
        },
        submit() {
            this.dialog = true;
            setTimeout(() => {
                this.dialog = false;
                this.sendLoginRequest();
            }, 4000);
        }
    }
};
</script>

<style scoped></style>

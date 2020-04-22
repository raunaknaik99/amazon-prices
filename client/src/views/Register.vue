<template>
  <v-container class="fill-height" fluid style="max-width: 700px">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-alert type="error" v-if="$store.state.error">{{ $store.state.error }}</v-alert>
        <v-card class="elevation-12">
          <v-card-title class="display-2 justify-center">REGISTER</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="email"
                label="Email"
                prepend-icon="mdi-email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="username"
                label="Username"
                prepend-icon="mdi-account-circle"
                :rules="usernameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                prepend-icon="mdi-lock-check"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showConfirmPassword = !showConfirmPassword"
                :rules="confirmPasswordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="mt-2" block color="info" @click="validateUser">Register</v-btn>
          </v-card-actions>
          <v-list-item to="/login">Already have an account? Sign in</v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      //Validation
      emailRules: [],
      usernameRules: [],
      passwordRules: [],
      confirmPasswordRules: []
    };
  },

  watch: {
    email() {
      this.emailRules = [];
    },
    username() {
      this.usernameRules = [];
    },
    password() {
      this.passwordRules = [];
    },
    confirmPassword() {
      this.confirmPasswordRules = [];
    }
  },

  methods: {
    validateUser() {
      this.emailRules = [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ];
      this.usernameRules = [
        v => !!v || "Username is required",
        v => !/\s/.test(v) || "Username cannot contain spaces"
      ];
      this.passwordRules = [
        v => !!v || "Password is required",
        v => v.length > 5 || "Password length has to be greater than 5"
      ];
      this.confirmPasswordRules = [
        v => v === this.password || "Passwords must match"
      ];
      setTimeout(() => {
        if (this.$refs.form.validate()) this.registerUser();
      }, 1);
    },

    ...mapActions(["register"]),

    registerUser() {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      this.register(user)
        .then(res => {
          if (res.data.success) {
            console.log("registered");
            this.$router.replace({ name: "Login" });
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
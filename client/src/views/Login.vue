<template>
  <v-container class="fill-height" fluid style="max-width: 700px" @keydown.enter="validateUser">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-alert type="error" v-if="$store.state.error">{{ $store.state.error }}</v-alert>
        <v-card class="elevation-12">
          <v-card-title class="display-2 justify-center">LOGIN</v-card-title>
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
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn block class="mt-2" color="info" @click="validateUser">Login</v-btn>
          </v-card-actions>
          <v-list-item to="/register">Need an account? Sign up</v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    showPassword: false,
    email: "",
    password: "",
    //Validation
    emailRules: [],
    passwordRules: []
  }),

  watch: {
    email() {
      this.emailRules = [];
    },
    password() {
      this.passwordRules = [];
    }
  },

  methods: {
    ...mapActions(["login"]),

    validateUser() {
      this.emailRules = [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ];
      this.passwordRules = [
        v => !!v || "Password is required",
        v => v.length > 5 || "Password length has to be greater than 5"
      ];
      setTimeout(() => {
        if (this.$refs.form.validate()) this.loginUser();
      }, 1);
    },

    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user).then(res => {
        if (res.data.success) {
          this.$router.push({ name: "Profile" });
        }
      });
    }
  }
};
</script>

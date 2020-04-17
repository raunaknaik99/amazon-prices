<template>
  <v-container class="fill-height" fluid style="max-width: 700px">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-card class="elevation-12">
          <v-card-title class="display-2 justify-center">REGISTER</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="Email" prepend-icon="mdi-email"></v-text-field>
              <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle"></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                prepend-icon="mdi-lock-check"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showConfirmPassword = !showConfirmPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="mt-2" block color="info" @click="registerUser">Register</v-btn>
          </v-card-actions>
          <v-list-item to="/accounts/login">Already have an account? Sign in</v-list-item>
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
      showConfirmPassword: false
    };
  },
  methods: {
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
          if (res.data.success) console.log("registered");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
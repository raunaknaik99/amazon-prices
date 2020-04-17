<template>
  <v-container class="fill-height" fluid style="max-width: 700px">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-card class="elevation-12">
          <v-card-title class="display-2 justify-center">LOGIN</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="Email" prepend-icon="mdi-email"></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn block class="mt-2" color="info" @click="loginUser">Login</v-btn>
          </v-card-actions>
          <v-list-item to="/accounts/register">Need an account? Sign up</v-list-item>
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
    password: ""
  }),

  methods: {
    ...mapActions(["login"]),

    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) console.log("Done");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

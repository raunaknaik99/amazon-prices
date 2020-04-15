<template>
  <v-container class="my-12" fluid style="max-width: 700px">
    <v-card text-center>
      <v-card-title class="display-2 justify-center">LOGIN</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Email" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field
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
        <v-btn class="mt-2" width="100%" color="info">Login</v-btn>
      </v-card-actions>
      <v-list-item to="/users/register">Need an account? Register</v-list-item>
    </v-card>
  </v-container>
</template>
<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const event = reactive({
      showPassword: false
    });
    return { ...toRefs(event) };
  }
};
</script>

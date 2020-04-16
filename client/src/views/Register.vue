<template>
  <v-container class="my-5" fluid style="max-width: 700px">
    <v-card>
      <v-card-title class="display-2 justify-center">REGISTER</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Email" prepend-icon="mdi-email"></v-text-field>
          <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
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
        <v-btn class="mt-2" block color="info">Register</v-btn>
      </v-card-actions>
      <v-list-item to="/users/login">Already have an account? Sign in</v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const event = reactive({
      showPassword: false,
      showConfirmPassword: false
    });
    return { ...toRefs(event) };
  }
};
</script>
<template>
  <div>
    <v-app-bar color="teal lighten-3" dark app>
      <v-toolbar-title>Amazon Prices</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn to="/accounts/login" text rounded>Login</v-btn>
        <v-btn to="/accounts/register" text rounded>Register</v-btn>
        <v-btn to="/about" text rounded>About</v-btn>
        <v-btn to="/accounts/login" text rounded v-if="$store.isLoggedIn">Logout</v-btn>
      </div>
      <v-icon class="d-md-none" @click="drawer = !drawer">mdi-reorder-horizontal</v-icon>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" right app>
      <v-list>
        <v-list-item to="/accounts/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item to="/accounts/register">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/accounts/login" v-if="$store.isLoggedIn">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const drawer = ref(false);
    return { drawer };
  }
};
</script>

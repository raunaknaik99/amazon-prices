<template>
  <div>
    <v-app-bar color="teal lighten-3" dark app>
      <v-toolbar-title>Amazon Scraper</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn to="/users/login" text rounded>Login</v-btn>
        <v-btn to="/users/register" text rounded>Register</v-btn>
        <v-btn to="/about" text rounded>About</v-btn>
      </div>
      <v-toolbar-side-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-reorder-horizontal</v-icon>
      </v-toolbar-side-icon>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" right app>
      <v-list>
        <v-list-item to="/users/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item to="/users/register">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
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

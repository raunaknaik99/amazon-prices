<template>
  <div>
    <v-app-bar color="teal lighten-3" dark app>
      <v-toolbar-title>Amazon Scraper</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-sm-none d-md-flex">
        <v-btn text rounded>Register</v-btn>
        <v-btn to="/users/login" text rounded>Login</v-btn>
        <v-btn text rounded>About</v-btn>
      </div>
      <v-toolbar-side-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-reorder-horizontal</v-icon>
      </v-toolbar-side-icon>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" right app></v-navigation-drawer>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup() {
    const event = reactive({
      drawer: false
    });
    return { ...toRefs(event) };
  }
};
</script>

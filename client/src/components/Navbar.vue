<template>
  <div>
    <v-app-bar color="white" app>
      <v-toolbar-title>Amazon Prices</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn to="/profile" text rounded v-if="auth">Profile</v-btn>
        <v-btn to="/login" text rounded v-if="!auth">Login</v-btn>
        <v-btn to="/register" text rounded v-if="!auth">Register</v-btn>
        <v-btn to="/about" text rounded>About</v-btn>
        <v-btn text rounded v-if="auth" @click="logoutUser">Logout</v-btn>
      </div>
      <v-icon class="d-md-none" @click="drawer = !drawer">mdi-menu</v-icon>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" right app>
      <v-list class="text-center">
        <v-list-item to="/profile" v-if="auth">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/login" v-if="!auth">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item to="/register" v-if="!auth">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/login" v-if="auth" @click="logoutUser">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      drawer: ""
    };
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

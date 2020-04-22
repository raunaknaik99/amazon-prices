<template>
  <v-container>
    <v-card>
      <v-card-title>{{$store.getters.user.username}}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>
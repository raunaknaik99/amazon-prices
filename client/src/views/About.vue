<template>
  <v-container class="fill-height" fluid style="max-width: 700px">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-card class="elevation-12">
          <v-card-title class="display-2 justify-center">About</v-card-title>
          <v-card-text
            class="title"
          >A simple Website that tracks the prices of products on amazon that the user wants and notifies the user if the price for the product drops below the price that the user specifies.</v-card-text>
          <v-divider></v-divider>
          <v-card-text class="title text-center">
            <a href="https://www.amazon.in">AMAZON</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
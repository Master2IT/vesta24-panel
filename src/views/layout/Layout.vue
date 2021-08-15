<template>
  <v-app>
    <toolbar />
    <navbar />
    <v-main class="white">
      <v-container fluid class="mb-10">
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-snackbar
      v-model="snackbar_show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      :top="snackbar.top"
      :bottom="snackbar.bottom"
      :left="snackbar.left"
      :right="snackbar.right"
    >
      <v-btn block text class="ma-0">
        <v-icon left>{{ snackbar.icon }}</v-icon>
        <span>{{ snackbar.text }}</span>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Toolbar from "@/views/layout/Toolbar";
import Navbar from "@/views/layout/Navigation";

export default {
  components: {
    Toolbar,
    Navbar,
  },
  data() {
    return {
      snackbar: {
        text: "",
        bottom: true,
        top: false,
        right: true,
        left: false,
        icon: "",
        timeout: 2000,
      },
    };
  },
};
</script>
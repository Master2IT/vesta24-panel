<template>
  <div>
    <v-navigation-drawer app right fixed>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Title </v-list-item-title>
          <v-list-item-subtitle> Manager </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
  // computed: {
  //   marketer() {
  //     return this.$store.getters.marketer;
  //   },
  //   profile() {
  //     return this.$store.getters.profile;
  //   },
  // },
};
</script>
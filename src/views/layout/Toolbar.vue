<template>
  <div>
    <v-app-bar
      color="white"
      elevation="0"
      class="custom-appbar"
      app
      fixed
      style="border-bottom: 1px solid #e0e0e0 !important"
    >
      <v-text-field
        placeholder="جستجو"
        dense
        outlined
        hide-details
        class="custom-searchbox"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      
      <v-spacer></v-spacer>

      <v-avatar>
        <img src="https://i.pravatar.cc/300" alt="" />
      </v-avatar>
    </v-app-bar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.custom-searchbox {
  fieldset {
    border: 1px solid #e0e0e0 !important;
  }
}
</style>

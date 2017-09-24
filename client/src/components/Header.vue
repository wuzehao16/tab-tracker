<template>
  <v-toolbar fixed class="cyan lighten-3" dark>
    <v-toolbar-title class="mr-4">
      <router-link to='/'>
         TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>
        Browser
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to='login' tag="v-btn" class="btn--flat theme--dark">
        Login
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items>
      <router-link to='register' tag="v-btn" class="btn--flat theme--dark">
        Sign Up
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>


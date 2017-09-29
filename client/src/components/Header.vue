<template>
  <v-toolbar fixed class="cyan lighten-3" dark>
    <v-toolbar-title class="mr-4">
      <router-link to='/'>
         TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>
        <router-link to='songs' tag="v-btn" class="btn--flat theme--dark">
          Browser
      </router-link>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <router-link to='login' tag="v-btn" class="btn--flat theme--dark">
        Login
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <router-link to='register' tag="v-btn" class="btn--flat theme--dark">
        Sign Up
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to homepage
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style>

</style>


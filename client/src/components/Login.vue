<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <v-card class=" elevation-0">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Email</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                  <v-text-field
                          label="Enter your Email"
                          v-model="email"
                          :rules="[rules.required, rules.email]"
                  ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Password</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-10-1"
                      label="Enter your password"
                      hint="At least 8 characters"
                      v-model="password"
                      min="8"
                      :type="'password'"
                      :rules="[rules.required,rules.character]"
                      counter
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
             <div v-html="error" class="error--text"></div>
            <v-btn class="cyan lighten-3" @click="login">
              Login
            </v-btn>
          </v-card>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel.vue'
export default {
  name: 'register',
  data () {
    return {
      error: null,
      email: '',
      password: '',
      validatePassword: '',
      e1: false,
      e2: false,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          // eslint-disable-next-line no-useless-escape
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        password: (value) => {
          return this.password === this.validatePassword ? true : 'These passwords don\'t match. Try again?'
        },
        character: (value) => {
          const pattern = new RegExp('^[a-zA-Z0-9]{8,32}$')
          return pattern.test(value) || 'At least 8 characters'
        }
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>


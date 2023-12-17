<template>
    <v-app>
      <v-content>
        <v-container class="fill-height" >
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="#C3F942" flat>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      v-model="username"
                      :rules="emptyUsername"
                      name="login"
                      prepend-icon="person"
                      type="text"
                      color="light-green lighten-2"
                    />
  
                    <v-text-field
                      id="password"
                      v-model="password"
                      :rules="emptyPassword"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      color="light-green lighten-2"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="#C3F942 ">
                <span class="white--text">Login</span> 
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  <script>
  export default {
    computed: {
      emptyUsername: {
        get () {
          return [
            value =>!!value || 'Username is required'
          ]
        }
      },
      emptyPassword: {
        get () {
          return [
            value => !!value || 'Password is required'
          ]
        }
      },
      username: {
        get () {
          return this.$store.state.userInfo.username
        },
        set (value) {
          this.$store.state.userInfo.username = value
        }
      },
      password: {
        get () {
          return this.$store.state.userInfo.password
        },
        set (value) {
          this.$store.state.userInfo.password = value
        }
      }
    },
    methods: {
    login : function () {
      this.$store.dispatch('authRequest', {
        username: this.username, 
        password: this.password
    })
    }

    }
  }
  </script>
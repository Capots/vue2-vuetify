<template>
  <div class="full-height">
    <v-row no-gutters class="justify-center grey lighten-1 box">
      <v-flex xs10 md7>
        <v-card rounded="lg" class="mx-auto overflow-hidden" outlined>
          <v-card-text class="pa-0">
            <v-flex row class="no-gutters">
              <v-flex
                v-if="!$vuetify.breakpoint.isMobile"
                md6
                class="red lighten-5 inherit d-flex align-center justify-center"
              >
                <v-img src="../assets/3d.png" class="logo-img">
                </v-img>
              </v-flex>
              <v-flex md6 class="lime lighten-4 inherit text-center pa-3 d-flex flex-column justify-space-between" style="gap: 40px">
                <div class="d-flex flex-column align-center">
                  <div class="text-overline">
                    ssshhhhh
                  </div>
                  <v-divider></v-divider>
                </div>
                <div class="d-flex flex-column">
                  <div class="pa-4">
                    <v-form @submit.prevent="login">
                    <v-text-field
                      label="Login"
                      v-model="username"
                      :rules="emptyUsername"
                      name="login"
                      prepend-icon="person"
                      type="text"
                      color="light-green darken-2"
                    />
  
                    <v-text-field
                      id="password"
                      v-model="password"
                      :rules="emptyPassword"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      color="light-green darken-2"
                    />
                      <v-btn type="submit" block color="#C3F942"> 
                      <span class="grey--text">LOGIN</span>
                      </v-btn>
                    </v-form>
                  </div>
                  <div class="text-caption">
                  
                  </div>
                </div>
                <div class="d-flex align-center justify-center">
                  <div class="text-caption">© 2023</div>
                </div>
              </v-flex>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-row>
  </div>
</template>
  
  <script>
  // import axios from "axios";
  export default {
    data(){
      return {
        username: "",
        password: ""
      }
    },
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
    },
    methods: {
      login () {
        let data = {
          username: this.username,
          password: this.password
        };
        this.$store.dispatch('authRequest', this.$formdata.generate(data))
      }
    }
  }
  </script>
  <style scoped>
.box {
  height: inherit;
  align-items: center;
}
.inherit {
  height: inherit;
}
.fields {
  font-size: 13px !important;
}
.full-height {
  height: 100%;
}
.logo-img {
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
}
</style>
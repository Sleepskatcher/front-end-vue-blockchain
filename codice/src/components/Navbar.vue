<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <router-link to="/">
          <v-img src="@/assets/logo.png" alt="logo" height="40" width="100" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <div id="userLogged" v-if="isLogged">
        <v-row>
          <v-col>
            <v-btn
            id="buttonNameUser"
              router
              :to="links[0].userPage"
              color="amber accent-4"
              class="mx-1 black--text font-weight-bold"
            >
              {{ userData.name }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              @click="logOut"
              color="amber accent-4"
              class="mx-1 black--text font-weight-bold"
            >
              <span>Log out</span>
              <v-icon right>
                logout
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div id="userNotLogged" v-else>
        <v-row>
          <v-col cols="6">
            <v-btn
              router
              :to="links[0].login"
              class="mx-1 black--text font-weight-bold"
              color="amber accent-4"
            >
              <span>Log in</span>
              <v-icon right>
                login
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              router
              :to="links[0].signup"
              color="amber accent-4"
              class="mx-1 black--text font-weight-bold"
            >
              <span>Sign up</span>
              <v-icon right>
                login
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import router from "../router/router";
export default {
  data() {
    return {
      links: [
        {
          login: "/login",
          signup: "/signup",
          userPage: "/userPage"
        }
      ]
    };
  },
  computed: {
    isLogged: {
      get() {
        return this.$store.getters["CurrentUser/isAuthenticated"];
      }
    },
    userData: {
      get() {
        return this.$store.getters["CurrentUser/user"];
      }
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("CurrentUser/logOut");
      if (this.$router.currentRoute.fullPath !== "/") router.push("/");
    }
  }
};
</script>

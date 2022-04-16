<template>
  <v-app class="grey darken-4"  style="overflow:auto">
    <navbar v-if="checkRoute()" />
    <v-main class="grey darken-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  methods: {
    checkRoute() {
      return !['login', 'signup', 'uploadOpera'].includes(this.$route.name);
    }
  }
};
</script>

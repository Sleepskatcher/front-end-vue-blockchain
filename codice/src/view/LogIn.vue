/* eslint-disable vue/max-attributes-per-line */
<template>
  <v-container fluid style="height: 100vh;">
    <Particle />
    <v-layout fill-height>
      <v-row id="login-container" class="pa-1" dense>
        <v-btn
          class="my-2 black--text font-weight-bold"
          router
          :to="links[0].home"
          color="amber accent-4"
        >
          Home
        </v-btn>
        <v-col
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-alert
            v-model="alert"
            color="red"
            dense
            dismissible
            elevation="5"
            icon="mdi-alert-circle"
          >
            {{ errorMessage }}
          </v-alert>
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form" v-model="isFormValid">
                  <v-text-field
                    id="emailInput"
                    v-model="user.email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    prepend-icon="email"
                    color="amber accent-4"
                  />
                  <v-text-field
                    id="passwordInput"
                    v-model="user.password"
                    label="Password"
                    :rules="[rules.required, rules.length]"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off'"
                    prepend-icon="lock"
                    @click:append="show = !show"
                    color="amber accent-4"
                  />
                </v-form>
              </v-flex>
            </v-card-actions>
            <v-card-text>
              <p>
                Non hai un account? Clicca
                <router-link to="/signup">
                  qui
                </router-link>
                per registrarti
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                @click="sendDataLogin"
                color="amber accent-4"
                class="black--text"
                :disabled="!isFormValid"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import Particle from "@/view/Particle.vue";

export default {
  name: "Login",
  components: {
    Particle
  },
  data() {
    return {
      isFormValid: false,
      alert: false,
      user: {
        email: "",
        password: ""
      },
      links: [
        {
          home: "/"
        }
      ],
      show: false,
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
        length: val => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
        },
        email: val => {
          const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return patternEmail.test(val) || "Email non valida";
        }
      }
    };
  },
  computed: {
    errorMessage: {
      get() {
        return this.$store.getters["CurrentUser/errorMessageLog"];
      }
    }
  },
  methods: {
    sendDataLogin() {
      this.$store.dispatch("CurrentUser/loginUser", this.user);
      if (this.$store.getters["CurrentUser/errorMessageLog"] !== '')
        this.alert = true;
    }
  }
};
</script>

<style scoped></style>

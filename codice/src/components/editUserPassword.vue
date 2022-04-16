<template>
  <v-dialog v-model="dialog" width="60%" dark persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-1 black--text black--text font-weight-bold"
        v-bind="attrs"
        v-on="on"
        color="amber accent-4"
      >
        Modifica password
      </v-btn>
    </template>
    <v-card class="pa-3">
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
      <v-card-title class="text-h5 amber accent-4">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon> </v-btn
        >Modifica password</v-card-title
      >
      <v-form v-model="isFormValid">
        <v-text-field
          id="emailMPInput"
          v-model="user.email"
          label="Email"
          :rules="[rules.required]"
          color="amber accent-4"
        />
        <v-text-field
          id="passwordOldInput"
          v-model="user.oldPassword"
          label="Vecchia password"
          :rules="[rules.required, rules.length]"
          color="amber accent-4"
           :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="lock"
          @click:append="show = !show"
        />
        <v-text-field
          id="passwordNewInput"
          v-model="user.newPassword"
          label="Nuova password"
          :rules="[rules.required, rules.length]"
          color="amber accent-4"
           :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="lock"
          @click:append="show1 = !show1"
        />
      </v-form>
      <v-card-actions>
        <v-btn
          class="black--text"
          block
          :disabled="!isFormValid"
          @click="updateUser"
          color="amber accent-4"
        >
          Conferma modifica
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      alert: false,
      dialog: false,
      isFormValid: false,
      show: false,
      show1: false,
      UserData: this.$store.getters["CurrentUser/user"],
      user: {
        oldPassword: "",
        newPassword: "",
        email: this.$store.getters["CurrentUser/user"].email
      },
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
        length: val => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
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
    updateUser() {
      this.$store.dispatch("CurrentUser/updatePassword", this.user);
      if (this.$store.getters["CurrentUser/errorMessageLog"] !== "") {
        this.alert = true;
      } else {
        this.dialog = false;
      }
    }
  }
};
</script>

<template>
  <v-container fluid>
    <v-row class="pa-1 d-flex justify-center" dense>
      <v-col cols="12"
        sm="12"
        md="6"
        lg="6" class="justify-center align-center">
          <v-card class="text-center" color="grey darken-3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  <v-avatar size="96">
                    <v-icon size="96" color="amber accent-4">
                      person
                    </v-icon>
                  </v-avatar>
                  {{ userData.name + " " + userData.surname }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="white--text">
                  Data di nascita:
                  {{ userData.dob }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="white--text">
                  Email:
                  {{ userData.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="white--text">
                  Wallet Address:
                  <a :href="'https://www.cointracker.io/wallet/bitcoin?address='+userData.wallet" target="_blank">{{userData.wallet}}</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions class="justify-center">
              <EditUserData />
            </v-card-actions>
            <v-card-actions class="justify-center">
              <EditUserPassword />
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col cols="12"
        sm="12"
        md="6"
        lg="6"  class="pa-3">
        <OperasList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OperasList from "@/view/operasList.vue";
import EditUserData from "@/components/editUserData.vue";
import EditUserPassword from "@/components/editUserPassword.vue";

export default {
  name: "UserPage",
  components: {
    OperasList,
    EditUserData,
    EditUserPassword
  },
  data() {
    return {
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ]
    };
  },
  computed: {
    userData: {
      get() {
        return this.$store.getters["CurrentUser/user"];
      }
    }
  }
};
</script>

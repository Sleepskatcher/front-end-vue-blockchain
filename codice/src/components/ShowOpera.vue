<template>
  <v-dialog
    dark
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-avatar size="80" v-bind="attrs" v-on="on">
        <v-img
          v-if="typeNumber(visiblePage) == 1"
            :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
        />
        <v-img
          v-else-if="typeNumber(visiblePage) == 2"
          src="@/assets/video.png"
        />
        <v-img
          v-else-if="typeNumber(visiblePage) == 3"
          src="@/assets/audio.png"
        />
        <v-img
          v-else-if="typeNumber(visiblePage) == 4"
          src="@/assets/doc.png"
        />
        <!--<v-img
                  :src="
            'https://cloudflare-ipfs.com/ipfs/' +
              opereId[Math.floor(Math.random() * opereId.length)]
          "
            :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
          />-->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title
          v-text="visiblePage.title"
          v-bind="attrs"
          v-on="on"
          class="white--text"
        />
        <v-list-item-subtitle
          v-text="visiblePage.description"
          v-bind="attrs"
          v-on="on"
          class="white--text"
        />
      </v-list-item-content>
    </template>
    <v-card>
      <v-card-title class="text-h5" color="amber accent-4">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon> </v-btn
        >Informazioni opera</v-card-title
      >
      <v-container>
        <v-row class="pa-1 d-flex justify-center" dense>
          <v-col cols="6" md="4" class="pa-5 justify-center align-center">
            <v-img
              contain
              max-height="800"
              max-width="800"
              v-if="typeNumber(visiblePage) == 1"
            :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
            />
            <v-img
            contain
              v-else-if="typeNumber(visiblePage) == 2"
              src="@/assets/video.png"
            />
            <v-img
            contain
              v-else-if="typeNumber(visiblePage) == 3"
              src="@/assets/audio.png"
            />
            <v-img
            contain
              v-else-if="typeNumber(visiblePage) == 4"
              src="@/assets/doc.png"
            />
            <!--<v-img
              :src="
                'https://cloudflare-ipfs.com/ipfs/' +
                  opereId[Math.floor(Math.random() * opereId.length)]
              "
             :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
          />-->
          </v-col>
          <v-col cols="12" sm="6" md="8" class="pa-3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="amber--text font-weight-bold"
                  v-text="visiblePage.title"
                />
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Prezzo: </span>
                  {{ visiblePage.price + " " + visiblePage.currency }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Autore: </span>
                  {{ visiblePage.author }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Proprietario: </span>
                  {{ visiblePage.owner }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Descrizione: </span>
                  {{ visiblePage.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-chip
              v-for="category in visiblePage.categories"
              :key="category.name"
              item-value="name"
              item-text="name"
              class="ma-2"
              color="amber accent-4"
              label
              text-color="black"
            >
              <v-icon small left>
                label
              </v-icon>
              {{ category.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visiblePage"],
  data() {
    return {
      dialog: false,
      opereId: [
        "QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC",

        "QmWjHc9zb5ojPsjA43B3SFyKRPqd9Mc57R9EnTCgduyNzv",

        "Qmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat",

        "QmUZKcyxFm82CpsuRxkentY3zw8dRxGxHni8ggDuxQQYDP"
      ]
    };
  },
  methods: {
typeNumber(visiblePage) {
      if ((visiblePage.type === "img" || visiblePage.type === "Immagine")) {
        return 1;
      } else if ((visiblePage.type === "video" || visiblePage.type === "Video")) {
        return 2;
      } else if ((visiblePage.type === "audio" || visiblePage.type === "Audio")) {
        return 3;
      } else {
        return 4;
      }
    }
  }
};
</script>

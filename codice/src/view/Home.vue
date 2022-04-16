<template>
  <v-container fluid>
    <v-combobox
      v-model="filterCategories"
      :items="categories"
      item-value="name"
      item-text="name"
      :return-object="true"
      multiple
      chips
      clearable

      solo
      label="Filtro per categoria"
      prepend-inner-icon="category"
      color="amber accent-4"
      item-color="amber accent-4"
    />
    <v-row fill-height>
      <v-col
        v-for="visiblePage in visiblePages"
        :key="visiblePage.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="text-center" color="grey darken-3">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-avatar tile size="100">
                <v-img
                contain
                  v-if="typeNumber(visiblePage) == 1"
                  :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
                />
                <v-img
                contain
                  v-else-if="typeNumber(visiblePage) == 2"
                  src="@/assets/video.png"
                  max-height="200px"
                  max-width="200px"
                />
                <v-img
                contain
                  v-else-if="typeNumber(visiblePage) == 3"
                  src="@/assets/audio.png"
                  max-height="200px"
                  max-width="200px"
                />
                <v-img
                contain
                  v-else-if="typeNumber(visiblePage) == 4"
                  src="@/assets/doc.png"
                  max-height="200px"
                  max-width="200px"
                />
                <!--<v-img
                  :src="
                    'https://cloudflare-ipfs.com/ipfs/' +
                      opereId[Math.floor(Math.random() * opereId.length)]
                  "
                  :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
          />-->
              </v-list-item-avatar>
              <v-list-item-title
                class="amber--text font-weight-bold"
                v-text="visiblePage.title"
              />
              <v-list-item-subtitle
                class="white--text"
                v-text="visiblePage.description"
              />
              <v-list-item-subtitle class="white--text">
                {{ visiblePage.price + " " + visiblePage.currency }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="justify-center">
            <ViewOperaHome :visible-page="visiblePage" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      dark
      class="black--text"
      v-model="page"
      :length="Math.ceil(this.operas.length / perPage)"
      color="amber accent-4"
    />
  </v-container>
</template>

<script>
import ViewOperaHome from "@/components/ViewOperaHome.vue";

export default {
  components: {
    ViewOperaHome
  },
  data() {
    return {
      opereId: [
        "QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC",

        "QmWjHc9zb5ojPsjA43B3SFyKRPqd9Mc57R9EnTCgduyNzv",

        "Qmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat",

        "QmUZKcyxFm82CpsuRxkentY3zw8dRxGxHni8ggDuxQQYDP"
      ],
      filterCategories: [],
      page: 1,
      perPage: 8,
      pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      selected: []
    };
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/homeOperas"];
      }
    },
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
      }
    },
    visiblePages: {
      get() {
        var operaToFilter = new Array();
        var operaToSee = new Array();
        var cat = this.filterCategories;
        if (cat.length !== 0) {
          for (var i = 0; i < this.operas.length; i++) {
            for (var categories = 0; categories < cat.length; categories++) {
              for (var x = 0; x < this.operas[i].categories.length; x++) {
                if (
                  this.operas[i].categories[x].name === cat[categories].name
                ) {
                  operaToFilter.push(this.operas[i]);
                }
              }
            }
          }
        } else {
          operaToFilter = this.operas;
        }
        var init = this.page * this.perPage - this.perPage;
        var end = this.page * this.perPage;
        operaToSee = operaToFilter.slice(init, end);
        return operaToSee;
      }
    }
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
  },
  created() {
    this.$store.dispatch("nftService/getHomeOperas");
    this.$store.dispatch("nftService/getCategories");
  }
};
</script>

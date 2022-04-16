<template>
  <v-list two-line color="grey darken-3">
    <template v-for="visiblePage in visiblePages">
      <v-list-item :key="visiblePage.id">
          <ShowOpera :visiblePage="visiblePage" />
        <v-list-item-action>
          <EditOpera :visiblePage="visiblePage" />
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="visiblePage.id" />
    </template>

    <v-row class="pa-3">
      <v-col cols="12"
        sm="12"
        md="6"
        lg="6" >
        <v-pagination
          v-model="page"
          :length="Math.ceil(this.operas.length / perPage)"
          color="amber accent-4"
          dark
        />
      </v-col>
      <v-col cols="12"
        sm="12"
        md="6"
        lg="6" >
        <v-btn
          router
          :to="links[0].uploadOpera"
          color="amber accent-4"
          class="mx-1 black--text font-weight-bold"
        >
          Carica una nuova opera
        </v-btn>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
import ShowOpera from "@/components/ShowOpera.vue";
import EditOpera from "@/components/editOpera.vue";

export default {
  components: {
    ShowOpera,
    EditOpera
  },
  data() {
    return {
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ],
      selected: [],
      page: 1,
      perPage: 4,
      pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        opereId: [
        "QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC",

        "QmWjHc9zb5ojPsjA43B3SFyKRPqd9Mc57R9EnTCgduyNzv",

        "Qmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat",

        "QmUZKcyxFm82CpsuRxkentY3zw8dRxGxHni8ggDuxQQYDP"
      ],
    };
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/operas"];
      }
    },
    visiblePages: {
      get() {
        var operaToSee = new Array();
        var init = this.page * this.perPage - this.perPage;
        var end = this.page * this.perPage;
        operaToSee = this.operas.slice(init, end);
        return operaToSee;
      }
    }
  },
    methods: {
        typeNumber(visiblePage) {
      if ((visiblePage.type === "img")) {
        return 1;
      } else if ((visiblePage.type === "video")) {
        return 2;
      } else if ((visiblePage.type === "audio")) {
        return 3;
      } else {
        return 4;
      }
    }
  },
  created() {
    this.$store.dispatch("nftService/userOperas");
  }
};
</script>

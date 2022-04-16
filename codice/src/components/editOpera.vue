<template>
  <v-dialog v-model="dialog" width="60%" dark persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on" class="white--text">
        edit
      </v-icon>
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
        >Modifica opera</v-card-title
      >
      <v-flex>
        <v-form v-model="isFormValid" class="pa-3">
          <v-text-field
          id="titleInput"
            v-model="visiblePage.title"
            label="Titolo"
            :rules="[rules.required]"
          />
          <v-text-field
          id="descriptionInput"
            v-model="visiblePage.description"
            label="Descrizione"
            :rules="[rules.required]"
          />
          <v-text-field v-model="visiblePage.type" readonly label="Tipo" />
          <v-combobox
          id="categoryInput"
            v-model="visiblePage.categories"
            :items="categories"
            item-value="name"
            item-text="name"
            :return-object="true"
            multiple
            chips
            clearable
            label="Categoria"
            prepend-icon="category"
            item-color="amber accent-4"
            color="amber accent-4"
            :rules="[rules.required]"
          />
          <v-text-field id="priceInput" v-model="visiblePage.price" label="Prezzo" />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn
          color="grey darken-4"
          class="white--text"
          block
          @click="Update"
          :disabled="!isFormValid"
        >
          Conferma modifiche
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    visiblePage: {
      type: Object
    }
  },
  data() {
    return {
      alert: false,
      isFormValid: false,
      dialog: false,
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
      }
    };
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
      }
    },
     errorMessage: {
      get() {
        return this.$store.getters["nftService/errorMessageOpera"];
      }
    }
  },
  created() {
    var type = this.visiblePage.type;
    if (type === "img") this.visiblePage.type = "Immagine";
    else if (type === "video") this.visiblePage.type = "Video";
    else if (type == "audio") this.visiblePage.type = "Audio";
    else this.visiblePage.type = "Documento";
    this.$store.dispatch("nftService/getCategories");
  },
  methods: {
    Update() {
      if (this.visiblePage.type === "Immagine") this.visiblePage.type = "img";
      else if (this.visiblePage.type === "Immagine")
        this.visiblePage.type = "img";
      else if (this.visiblePage.type === "Immagine")
        this.visiblePage.type = "img";
      else this.visiblePage.type = "doc";
      this.$store.dispatch("nftService/updateOpera", this.visiblePage);
      if (this.$store.getters["nftService/errorMessageOpera"] !== '') {
        this.alert = true;
      } else {
        this.dialog = false;
      }
    }
  }
};
</script>

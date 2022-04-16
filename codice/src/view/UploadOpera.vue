<template>
  <v-container fluid style="height: 100vh;">
    <Particle />
    <v-layout fill-height>
      <v-row class="pa-1" dense>
        <v-btn
          class="my-2 black--text font-weight-bold"
          router
          :to="links[0].paginaPersonale"
          color="amber accent-4"
        >
          Pagina personale
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
            {{ errorMessageOpera }}
          </v-alert>
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form" v-model="isFormValid">
                  <v-text-field
                    id="titleInput"
                    v-model="opera.title"
                    label="Titolo"
                    :rules="[rules.required]"
                    prepend-icon="title"
                    color="amber accent-4"
                  />
                  <v-text-field
                    id="descriptionInput"
                    v-model="opera.description"
                    label="Descrizione"
                    :rules="[rules.required]"
                    prepend-icon="description"
                    color="amber accent-4"
                  />
                  <v-row>
                    <v-col>
                      <v-file-input
                        id="fileInput"
                        v-model="file"
                        label="File"
                        type="file"
                        counter
                        :rules="[rules.required]"
                        prepend-icon="file_upload"
                        @change="previewImage"
                        color="amber accent-4"
                      />
                    </v-col>
                    <v-col>
                      <v-img
                        v-if="typeNumber == 1"
                        :src="url"
                        max-height="200px"
                        max-width="200px"
                      />
                      <v-img
                        v-else-if="typeNumber == 2"
                        src="@/assets/video.png"
                        max-height="200px"
                        max-width="200px"
                      />
                      <v-img
                        v-else-if="typeNumber == 3"
                        src="@/assets/audio.png"
                        max-height="200px"
                        max-width="200px"
                      />
                      <v-img
                        v-else-if="typeNumber == 4"
                        src="@/assets/doc.png"
                        max-height="200px"
                        max-width="200px"
                      />
                    </v-col>
                  </v-row>

                  <v-text-field
                    id="typeInput"
                    v-model="opera.type"
                    label="Tipo"
                    readonly
                    :rules="[rules.required]"
                    prepend-icon="file_upload"
                    color="amber accent-4"
                  />
                  <v-combobox
                    id="categoriesInput"
                    v-model="opera.categories"
                    :items="categories"
                    item-value="name"
                    item-text="name"
                    :return-object="true"
                    multiple
                    chips
                    clearable
                    label="Categoria"
                    :rules="[rules.required]"
                    prepend-icon="category"
                    color="amber accent-4"
                    item-color="amber accent-4"
                  />
                  <v-text-field
                    id="priceInput"
                    v-model="opera.price"
                    label="Prezzo"
                    :rules="[rules.required]"
                    prepend-icon="attach_money"
                    hide-details
                    color="amber accent-4"
                  />
                </v-form>
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                @click="uploadNewOpera"
                color="amber accent-4"
                class="black--text"
                block
                :disabled="!isFormValid"
              >
                Carica l'opera
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
  components: {
    Particle
  },
  data() {
    return {
      isFormValid: false,
      links: [
        {
          paginaPersonale: "/userPage"
        }
      ],
      alert: false,
      typeNumber: 0,
      opera: {
        title: "",
        description: "",
        path: "i",
        price: "",
        type: "",
        categories: [],
        currency: "ETH",
        author: this.$store.getters["CurrentUser/user"].name,
        owner: this.$store.getters["CurrentUser/user"].name
      },
      file: "",
      url: "",
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
      },
      urlPreview: {
        doc: "require('@src/assets/doc.png)",
        audio: "require('@src/assets/audio.jpg)",
        video: "require('@src/assets/video.jpg)"
      }
    };
  },
  computed: {
    errorMessageOpera: {
      get() {
        return this.$store.getters["nftService/errorMessageOpera"];
      }
    },
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
      }
    }
  },
  created() {
    this.$store.dispatch("nftService/getCategories");
  },
  methods: {
    uploadNewOpera() {
      if (this.opera.type === "Immagine") this.opera.type = "img";
      else if (this.opera.type === "Video") this.opera.type = "video";
      else if (this.opera.type === "Audio") this.opera.type = "audio";
      else this.opera.type = "doc";
      var formatData = new FormData();
      formatData.append("file", this.file);
      formatData.append("opera", JSON.stringify(this.opera));
      this.opera = formatData;
      this.$store.dispatch("nftService/uploadOpera", formatData);
      if (this.$store.getters["nftService/errorMessageOpera"] !== '')
        this.alert = true;
    },
    previewImage() {
      console.log(this.file.type);
      if (this.file === null) {
        this.typeNumber = 0;
        this.opera.type = "";
      } else {
        if (this.file.type.includes("image")) {
          this.typeNumber = 1;
          this.url = URL.createObjectURL(this.file);
          this.opera.type = "Immagine";
        } else if (this.file.type.includes("video")) {
          this.typeNumber = 2;
          this.opera.type = "Video";
        } else if (this.file.type.includes("audio")) {
          this.typeNumber = 3;
          this.opera.type = "Audio";
        } else {
          this.typeNumber = 4;
          this.opera.type = "Documento";
        }
      }
    }
  }
};
</script>

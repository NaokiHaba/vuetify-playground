<script setup>

import {useImageUploadStore} from "@/stores/imageUploadStore";
import {ref} from "vue";

const imageStore = useImageUploadStore();
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileUpload = (event) => {
  const uploadFiles = Array.from(event.target.files || event);

  uploadFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageStore.addImage(file, e.target.result);
    }
    reader.readAsDataURL(file);
  });

  event.target.value = null;
}

const removeImage = (index) => {
  imageStore.removeImage(index);
}
</script>


<template>
  <v-form>
    <v-card flat class="position-relative pb-16">
      <v-card-title>複数画像のアップロード</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col
            v-for="(image, index) in imageStore.images"
            :key="index"
            cols="4"
            sm="2"
            md="2"
          >
            <v-img :src="image.url" aspect-ratio="1">
              <v-btn
                icon="true"
                size="small"
                color="error"
                @click="removeImage(index)"
                class="position-absolute top-0 right-0"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-img>
          </v-col>
          <v-col v-if="imageStore.images.length > 0" cols="4" sm="3" md="2">
            <v-sheet
              color="grey-lighten-3"
              class="d-flex flex-column align-center justify-center w-75 h-75"
              @click="triggerFileInput"
            >
              <v-icon size="24" color="grey-darken-1">mdi-plus</v-icon>
              <div class="text-grey-darken-1 mt-1">画像追加</div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-sheet
          v-if="!imageStore.images.length"
          color="grey-lighten-3"
          class="d-flex flex-column align-center justify-center mt-3 v-col-md-2"
          @click="triggerFileInput"
        >
          <v-icon size="48" color="grey-darken-1">mdi-plus</v-icon>
          <div class="text-body-1 text-grey-darken-1 mt-2">画像追加</div>
        </v-sheet>
      </v-card-text>
    </v-card>
    <input
      type="file"
      ref="fileInput"
      accept="image/*"
      multiple
      @change="handleFileUpload"
      class="d-none"
    />
  </v-form>
</template>



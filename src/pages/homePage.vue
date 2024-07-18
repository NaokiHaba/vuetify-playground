<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>複数画像のアップロード</v-card-title>
          <v-card-text>
            <router-link to="/media-upload">link </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>グルーピングされたサイドバー</v-card-title>
          <v-card-text>
            <router-link to="/sidebar">link </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>CKEditor5</v-card-title>
          <v-card-text>
            <router-link to="/editor-demo/ckeditor">link </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>tinymce</v-card-title>
          <v-card-text>
            <router-link to="/editor-demo/tinymce">link </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

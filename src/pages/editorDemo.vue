<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <v-btn color="primary" class="mt-4" @click="previewData">プレビュ</v-btn>

    <v-dialog v-model="showPreview" max-width="800px">
      <v-card>
        <v-card-title>CKEditor5</v-card-title>
        <v-card-text>
          <pre>{{ previewContent }}</pre>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showPreview = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Code,
  Subscript,
  Superscript,
  Link,
  Mention,
  List,
  TodoList,
  Heading,
  Image,
  ImageUpload,
  BlockQuote,
  CodeBlock,
  Indent,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
  Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import '@ckeditor/ckeditor5-build-classic/build/translations/ja';

export default {
  name: 'app',
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>CKEditor 5 + Vuex + Vue3</p>',
      editorConfig: {
        plugins: [
          Essentials, Paragraph, Bold, Italic, Strikethrough, Underline, Code,
          Subscript, Superscript, Link, Mention, List, TodoList, Heading,
          Image, ImageUpload, BlockQuote, CodeBlock, Indent, FontFamily,
          FontSize, FontColor, FontBackgroundColor, Undo
        ],
        toolbar: {
          items: [
            'undo', 'redo',
            '|',
            'heading',
            '|',
            'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
            '|',
            'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
            '|',
            'link', 'uploadImage', 'blockQuote', 'codeBlock',
            '|',
            'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
          ],
          shouldNotGroupWhenFull: false,
          withText: true,

        },
        mention: {
          feeds: [
            {
              marker: '@',
              feed: ['@Alice', '@Bob', '@Charlie', '@David', '@Eve'],
              minimumCharacters: 1
            }
          ]
        },
      },
      showPreview: false,
      previewContent: '',

    };
  },
  methods: {
    previewData() {
      this.previewContent = JSON.stringify({
        content: this.editorData,
      }, null, 2);
      this.showPreview = true;
    },
  }
};
</script>

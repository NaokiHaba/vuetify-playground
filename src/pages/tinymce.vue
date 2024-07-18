<template>
  <v-container>
    <h1>TinyMCE Editor Page</h1>
    <Editor
      v-model="content"
      :api-key="apiKey"
      :init="init"
      @update:modelValue="updateContent"
    />
    <v-btn class="mt-4" @click="showContent">Show Content</v-btn>
    <v-card v-if="showPreview" class="mt-4">
      <v-card-text v-html="content"></v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'TinyMCEPage',
  components: {
    Editor
  },
  setup() {
    const content = ref('')
    const showPreview = ref(false)
    const apiKey = 'YOUR_TINYMCE_API_KEY' // TinyMCEのAPIキーを設定してください

    const init = {
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'
    }

    const updateContent = (value) => {
      content.value = value
    }

    const showContent = () => {
      showPreview.value = true
    }

    return {
      content,
      apiKey,
      init,
      updateContent,
      showPreview,
      showContent
    }
  }
}
</script>

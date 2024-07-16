import { defineStore } from 'pinia'

interface ImageItem {
  file: File;
  url: string;
}

export const useImageUploadStore = defineStore('imageUpload', {
  state: (): { images: ImageItem[] } => ({
    images: []
  }),
  actions: {
    addImage(file: File, url: string) {
      this.images.push({ file, url })
    },
    removeImage(index: number) {
      this.images.splice(index, 1)
    },
    clearImages() {
      this.images = []
    }
  }
})

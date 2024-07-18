/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from '../App.vue'

// Composables
import { createApp } from 'vue'
import router from "@/router";
import {createPinia} from "pinia";
import CKEditor from '@ckeditor/ckeditor5-vue';
import 'tinymce/skins/ui/oxide/skin.min.css'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
app.use(pinia)

registerPlugins(app)

app.use(CKEditor)
app.mount('#app')

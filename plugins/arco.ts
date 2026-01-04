// plugins/arco.ts
import { defineNuxtPlugin } from '#app'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { Icon } from '@iconify/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ArcoVue)
  nuxtApp.vueApp.component('Icon', Icon)
})
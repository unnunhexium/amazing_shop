// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  css: [
    '@/assets/reset.scss',
    '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss',
  ],
  modules: ['@pinia/nuxt', '@nuxtjs/strapi'],
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/index.scss";',
        },
      },
    },
  },
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  css: ['@/assets/reset.scss'],
  modules: ['@pinia/nuxt', '@nuxtjs/strapi'],
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

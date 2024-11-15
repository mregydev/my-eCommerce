// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'vuetify-nuxt-module', '@pinia/nuxt'],
  imports: {
    dirs: [
      // Automatically import composables from the '~/DataAccess' directory
      'dataAccess',
    ],
  },
});

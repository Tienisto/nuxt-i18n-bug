// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'de',
        iso: 'de-DE'
      },
      {
        code: 'en',
        iso: 'en-US',
        isCatchallLocale: true
      },
    ],
  },
})

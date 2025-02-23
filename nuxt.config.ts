// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  i18n: {
    lazy: true,
    langDir: "locales/",
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "zh", iso: "zh-CN", file: "zh.json", name: "中文" },
      { code: "ja", iso: "ja-JP", file: "ja.json", name: "日本語" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      title: "Zhong's Homepage",
      titleTemplate: "%s | Zhong's Homepage",
    },
  },
});

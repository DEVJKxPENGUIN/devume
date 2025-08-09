// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  plugins: [],
  runtimeConfig: {
    // private keys which are only available server-side
    // apiSecret: '123'
    public: {
    }
  },
  app: {
    head: {
      title: 'Devume',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      link: [
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {rel: "preconnect", href: "https://fonts.gstatic.com"},
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Bebas+Neue&family=Nanum+Gothic&family=Saira:ital,wght@0,100..900;1,100..900&family=Tektur:wght@400..900&family=Orbitron:wght@400..900&display=swap"
        }
      ]
    }
  },
  modules: [
    '@pinia/nuxt'
  ]
})

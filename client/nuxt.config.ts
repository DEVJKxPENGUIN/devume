import tailwindcss from "@tailwindcss/vite"
import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  runtimeConfig: {
    // private keys which are only available server-sied
    // apiSecret: '123'
  },
  // @ts-ignore
  tailwindcss: {
    // https://tailwindcss.com/docs/configuration
    config: {
      theme: {
        extend: {
          colors: {
            primary: colors.green
          }
        }
      }
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
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        },
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
})

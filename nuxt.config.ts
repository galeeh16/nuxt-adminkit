// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  app: {
    head: {
      title: 'Nuxt Adminkit'
    },
  },
  // css: [
  //   '/public/assets/css/app.css'
  // ]
})

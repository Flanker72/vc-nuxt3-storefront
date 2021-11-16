import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
   meta: {
      link: [
         { href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css", rel: "stylesheet" },
      ],
   },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  
  tailwindcss:{
    cssPath: "@/assets/style/main.css",
    config: {
      theme: {
        extend: {
          colors:{
            shade_green: '#07ab67',
            shade_blue: '#121e2c',
            mint_green: '#a0f0c5',
            slate_grey: '#607080',
            ivory_white: '#f9f9f9',

            fb: '#1877F2',
            X: '#1DA1F2',
            Insta: ' #E4405F',
            Yt: ' #FF0000',
            Disco: '#5865F2',
            Li: '#0A66C2',
            Wh: '#25D366',

          }
        }
      }
    }
  }

})


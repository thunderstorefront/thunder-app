// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'

dotenv.config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  extends: [
    '@thunderstorefront/api-mock',
    '@thunderstorefront/sdk',
    '@thunderstorefront/thunder',
  ],

  devtools: { enabled: true }
})

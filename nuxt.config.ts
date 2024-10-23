// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'

dotenv.config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  extends: [
    '@thunderstorefront/api-mock',
    ['github:thunderstorefront/thunder/packages/sdk'],
    ['github:thunderstorefront/thunder/packages/thunder'],
  ],

  devtools: { enabled: true }
})

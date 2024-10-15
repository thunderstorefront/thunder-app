// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'

dotenv.config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  extends: [
    '@thunderstorefront/api-mock',
    ['github:gromovoy88/nuxt-commerce/packages/sdk', { auth: process.env.GITHUB_TOKEN }],
    ['github:gromovoy88/nuxt-commerce/packages/thunder', { auth: process.env.GITHUB_TOKEN }],
  ],

  devtools: { enabled: true }
})

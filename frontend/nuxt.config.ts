// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@pinia/nuxt"],
  plugins: [
    "@/plugins/global-functions.js", // 플러그인 파일의 경로
  ],
});

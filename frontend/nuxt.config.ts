// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@qirolab/nuxt-sanctum-authentication"],
  laravelSanctum: {
    // Replace with your Laravel API URL
    apiUrl: "http://localhost:8000"
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/image",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./src/components/ui",
  },
});

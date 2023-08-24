// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/bootstrap.min.css", "~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "First Dance Thame",
      meta: [
        {
          name: "description",
          content:
            "Ballet classes for children of all ages in Oxfordshire and Buckinghamshire",
        },
        { name: "theme-color", content: "#000" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "Keywords",
          content:
            "First Dance Classes Oxfordshire, First Dance Classes Buckinghamshire, First Dance Classes Children",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/be99808d02.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});

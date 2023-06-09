// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            apiKey: '',
            apiUrl: '',
            apiLanguage: '',
            imageUrl: '',
        }
    },
    modules: [
        "@nuxtjs/ionic",
    ],
    ionic: {
        integrations: {
            //
        },
        css: {
            basic: true,
            core: true,
            utilities: true,
        },
    }
})

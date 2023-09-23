export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@nuxt/devtools"],
    css: [
        "vue-json-pretty/lib/styles.css"
    ],
    plugins: [
        "@/plugins/vue-json-pretty"
    ],
    devtools: {
        timeline: {
            enabled: true
        }
    }
})
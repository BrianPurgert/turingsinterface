export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxt/devtools'],
    css: ['@/assets/styles.css'],
    plugins: ['@/plugins/vue-json-pretty'],
    devtools: {
        timeline: {
            enabled: true
        }
    }
})
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },

    vite: {
        plugins: [tailwindcss()],
    },

    css: ["~/assets/css/main.css"],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    "Funnel Display": true,
                    "DM Sans": true,
                },
            },
        ],
    ],
});

/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#0092d2",
                    secondary: "#0A2DD1",
                    tertiary: "#0AD1A1",
                    accent: "#D1A215",
                    hover: "#D14315",
                },
            },
        },
        variations: {
            colors: ["primary", "secondary", "tertiary"],
            lighten: 4,
            darken: 4,
        },
    },
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa,
        },
    },
});

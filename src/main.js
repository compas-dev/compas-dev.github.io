/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Store
import store from "./stores";

// Highlightjs
// import "highlight.js/styles/stackoverflow-light.css";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import hljsVuePlugin from "@highlightjs/vue-plugin";

// hljs.registerLanguage("javascript", javascript);

const app = createApp(App);

registerPlugins(app);

app.use(store);
// app.use(hljsVuePlugin);
app.mount("#app");

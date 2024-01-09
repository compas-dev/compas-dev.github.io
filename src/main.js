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

const app = createApp(App);

registerPlugins(app);

app.use(store);
app.mount("#app");

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

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/pro-regular-svg-icons/faArrowUpRightFromSquare";

/* add icons to the library */
library.add(faArrowUpRightFromSquare);

// Store
import store from "./stores";

const app = createApp(App);

registerPlugins(app);

app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

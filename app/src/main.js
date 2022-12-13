import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes';
import { createPinia } from 'pinia';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faPlus, faEdit, faBars, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import plausible from './plugins/plausible';

library.add(faEdit, faPlus, faBars, faLocationCrosshairs);

const plausibleOptions = {
  domain: 'www.pwa-template.de',
  apiHost: 'https://tracking.jmartz.gmbh',
  hashMode: false,
  trackLocalhost: false
};

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component('fa', FontAwesomeIcon);
app.use(routes);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = routes;
});
app.use(pinia);
app.use(Vue3Notify);
app.mount('#app');

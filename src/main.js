import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStarHalfStroke, faStar, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';

import App from './App.vue';
import router from './router';

library.add(faStarHalfStroke, faStar, faStarReg, faArrowRight, faArrowLeft);

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon)

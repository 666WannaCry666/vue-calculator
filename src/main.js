import { createApp } from 'vue';
import App from '@/App.vue';
import '@/style.css';
import store from '@/store';
import router from '@/router/router';
import directives from '@/directives';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const app = createApp(App)

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

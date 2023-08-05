import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App);

app.use(router);

app.mount('#app');

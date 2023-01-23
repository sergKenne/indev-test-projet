import { createApp } from 'vue'
import { store } from './store';
import '../node_modules/slick-carousel/slick/slick.css';
import './assets/css/styles.scss'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.mount("#app");

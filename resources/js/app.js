import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.vue';
import { createApp } from 'vue';
import 'vue-good-table-next/dist/vue-good-table-next.css';
import VueGoodTablePlugin from 'vue-good-table-next';


const app = createApp(App);
app.use(VueGoodTablePlugin);
app.mount('#app');

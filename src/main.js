import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './libs/font-awesome-4.7.0/css/font-awesome.min.css'
import './libs/jquery/dist/jquery.min.js'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App);
app.config.globalProperties.emitter = emitter
app.use(router)
app.provide('emitter', emitter);
app.mount('#app')

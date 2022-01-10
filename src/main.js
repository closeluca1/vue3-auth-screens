import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJs from 'bootstrap/dist/js/bootstrap.min.js'

export default {
    // bootstrapCss,
    bootstrapJs
}

createApp(App).use(router).mount('#app')

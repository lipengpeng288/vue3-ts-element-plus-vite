import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import installElementPlus from './plugins/element'
import 'reset-css/sass/_reset.scss'
const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).mount('#app')

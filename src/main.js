import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import vuelloStore from './store/index.js'

const app = createApp(App)
app.use(vuelloStore)
app.mount('#app')

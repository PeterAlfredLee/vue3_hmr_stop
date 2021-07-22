import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mixin({})  // with this line, HMR stop
app.mount('#app')

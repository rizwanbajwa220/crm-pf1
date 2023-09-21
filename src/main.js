import App from './App.vue'
import router from './router'
import store from './store'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(store)

app.mount('#app')
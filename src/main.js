import App from './App.vue'
import router from './router'
import store from './store'
// Composables
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(vuetify)

app.use(store)

app.mount('#app')
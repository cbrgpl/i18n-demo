import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from './router'

import { I18nUtils } from './i18n.utils'

const app = createApp(App)
const i18n = I18nUtils.setupI18n()

app.use(i18n)
app.use(router)

app.mount('#app')

export {
    app,
    i18n
}
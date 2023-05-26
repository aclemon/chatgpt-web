import { createApp } from 'vue'
// import Vue from 'vue'
import setupLocatorUI from '@locator/runtime';
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

if (process.env.NODE_ENV === 'development') {
	console.log(process.env.NODE_ENV)
  setupLocatorUI({
    adapter: 'vue',
  })
}


const app = createApp(App)
// app.config.devtools = true;
setupAssets()

setupScrollbarStyle()

setupStore(app)

setupI18n(app)

await setupRouter(app)

app.mount('#app')
// async function bootstrap() {
// }
//
// bootstrap()

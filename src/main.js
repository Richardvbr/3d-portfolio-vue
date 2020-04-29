import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(Router);

// Setup router
const router = new Router({
  routes
})

// Initialize and inject vue app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

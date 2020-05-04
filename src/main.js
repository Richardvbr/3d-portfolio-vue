import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(Router);

// Setup router
const router = new Router({
  routes,
  base: '/',
  mode: 'history'
})

// Change meta title depending on active vue-route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// Initialize and inject vue app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

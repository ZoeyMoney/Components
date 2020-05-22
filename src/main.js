import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HiButton from './components/button'
import './assets/font/css/font-awesome.min.css'
Vue.component(HiButton.name,HiButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

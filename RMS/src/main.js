// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/reset.css'
import '@/assets/style/resetAnt.css'
import api from '@/api/api.js'
import axios from 'axios'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/js/common.js'
 
 
 

// Vue.use(ElementUI);
Vue.use(ant)
 
Vue.config.productionTip = false
Vue.prototype.$axios = axios
const addVueInstanceMethod = {
  api
}
Object.assign(Vue.prototype, addVueInstanceMethod)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

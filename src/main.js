import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import axios from '@/util/axios-util'
import 'element-ui/lib/theme-chalk/index.css'

// 关闭生产提示
Vue.config.productionTip = false
// 插件导入
Vue.use(ElementUI)
Vue.use(axios)
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

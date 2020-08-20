import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import AxiosUtil from '@/util/axios-util'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
// 常量
import Constant from '@/util/constant'
// ElmentUIUtil
import 'element-ui/lib/theme-chalk/index.css'
// custom scss
import '@/style/index.scss'

// 关闭生产提示
Vue.config.productionTip = false
// 插件导入
Vue.use(ElementUI)
Vue.use(Constant)
Vue.use(VueAxios, AxiosUtil)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

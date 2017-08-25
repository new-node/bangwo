// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './plugins/mui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'

Vue.use(MintUI)
Vue.use(mui)
Vue.use(VueResource)
Vue.config.productionTip = false

mui.config.islog= process.env.NODE_ENV === 'production'?false:true//是否打印数据
mui.config.root=process.env.NODE_ENV === 'production'?'http://test.zb12351.com/union-face/iface':'/iface'//ajax请求的根路径
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

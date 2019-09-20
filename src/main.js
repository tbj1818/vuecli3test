import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/index.css'
// axios需要使用prototype将axios挂载到原型上 ，$后面是自己另起的名称，以后就可以使用该名称
Vue.prototype.$axios = axios

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

//图片懒加载    vue-lazyload
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/404pic.jpg',
  loading: './assets/images/loading.gif',
  attempt: 1
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
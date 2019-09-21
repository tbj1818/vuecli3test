import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './http/api';
import http from './http/http';

// axios 拦截器
import './http/axios'

// 对后端接口 进行全局注册
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;

import './assets/index.css'
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
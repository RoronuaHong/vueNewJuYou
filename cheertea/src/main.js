// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入fastclick
import FastClick from 'fastclick'

//引入初始化
import './assets/css/common/reset.css'
import 'lib-flexible'

/*引入Mint UI*/
import MintUI from 'mint-ui'

/*引入axios进行数据通信*/
import axios from 'axios'

/*引入vuex*/
import store from './store'

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.$http = axios;

/*设置baseURL*/
axios.defaults.baseURL = 'http://wx.cheertea.com/';
// axios.defaults.baseURL = 'http://test.cheertea.com/';
// axios.defaults.baseURL = 'http://192.168.2.21:8080/zxxt_qyy/';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//执行fastclick功能
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

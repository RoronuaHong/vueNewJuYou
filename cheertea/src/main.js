import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/tools/lazyLoadPlugin.min.js'

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

Vue.prototype.lazyLoad = new lazyLoadPlugin({
                           element: "img",                 //元素的名称
                           attributes: "src",              //被转换的元素属性
                           dataAttributes: "data-src",     //转换的属性
                           offsetTop: 500,                 //显示的垂直距离
                           offsetLeft: 0,                  //显示的水平距离
                           duraction: 800,                 //固定的毫秒内必触发
                           delay: 500,                     //事件不动的时候触发
                           ele: "scroll"                   //默认事件为滚动事件
                         });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

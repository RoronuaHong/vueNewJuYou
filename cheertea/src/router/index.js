import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Classify from '@/pages/classify/classify'
import Car from '@/pages/car/car'
import Personcenter from '@/pages/personcenter/personcenter'

Vue.use(Router);

export default new Router({
  path: "/",
  // component: App, //顶层路由，对应index.html
  mode: "history",
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/personcenter',
      name: 'Personcenter',
      component: Personcenter
    }
  ]
})

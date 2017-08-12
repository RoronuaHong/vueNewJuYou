import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Classify from '@/pages/classify/classify'
import Car from '@/pages/car/car'
import Personcenter from '@/pages/personcenter/personcenter'
import Searchs from '@/pages/searchs/Searchs'
import Healthmuseum from '@/pages/healthmuseum/Healthmuseum'
import Focusqrcode from '@/pages/focusqrcode/Focusqrcode'
import Login from '@/pages/user/login'

Vue.use(Router);

export default new Router({
  path: "/",
  // component: App, //顶层路由，对应index.html
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
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
    },
    {
      path: '/searchs',
      name: 'Searchs',
      component: Searchs
    },
    {
      path: '/healthmuseum',
      name: 'Healthmuseum',
      component: Healthmuseum
    },
    {
      path: '/focusqrcode',
      name: 'Focusqrcode',
      component: Focusqrcode
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

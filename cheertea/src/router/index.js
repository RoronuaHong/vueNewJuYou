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
import Tests from '@/pages/test'
import Freeorder from '@/pages/freeorder/freeorder'
import Recommendedprize from '@/pages/recommendedprize/Recommendedprize'
import Feedback from '@/pages/feedback/feedback'
import Oversea from '@/pages/oversea/oversea'

Vue.use(Router);

const routers = new Router({
  path: "/cns",
  // component: App, //顶层路由，对应index.html
  mode: "history",
  // mode: "hash",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '*',
      redirect: 'cns/index'
    },
    {
      path: '/',
      name: 'Cns',
      component: App,
      redirect: '/cns/index',
      children: [
        /*首页*/
        {
          path: 'cns/index',
          name: 'Index',
          component: Index
        },
        /*测试页*/
        {
          path: 'cns/test',
          name: 'Test',
          component: Tests
        },
        /*分类页*/
        {
          path: 'cns/classify',
          name: 'Classify',
          component: Classify
        },
        /*购物车页*/
        {
          path: 'cns/car',
          name: 'Car',
          component: Car
        },
        /*个人中心页*/
        {
          path: 'cns/personcenter',
          name: 'Personcenter',
          component: Personcenter
        },
        /*搜索页*/
        {
          path: 'cns/searchs',
          name: 'Searchs',
          component: Searchs
        },
        /*养生页*/
        {
          path: 'cns/healthmuseum',
          name: 'Healthmuseum',
          component: Healthmuseum
        },
        /*二维码页*/
        {
          path: 'cns/focusqrcode',
          name: 'Focusqrcode',
          component: Focusqrcode
        },
        /*登录页*/
        {
          path: 'cns/login',
          name: 'Login',
          component: Login
        },
        /*月月抽免单页*/
        {
          path: 'cns/freeorder',
          name: 'Freeorder',
          component: Freeorder
        },
        /*推荐有奖页*/
        {
          path: 'cns/recommendedprize',
          name: 'Recommendedprize',
          component: Recommendedprize
        },
        /*拍砖赢礼品*/
        {
          path: 'cns/feedback',
          name: 'Feedback',
          component: Feedback
        },
        /*海外购*/
        {
          path: 'cns/oversea',
          name: 'Oversea',
          component: Oversea
        }
      ]
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Tests
    // },
    // {
    //   path: '/index',
    //   name: 'Index',
    //   component: Index
    // },
    // {
    //   path: '/classify',
    //   name: 'Classify',
    //   component: Classify
    // },
    // {
    //   path: '/car',
    //   name: 'Car',
    //   component: Car
    // },
    // {
    //   path: '/personcenter',
    //   name: 'Personcenter',
    //   component: Personcenter
    // },
    // {
    //   path: '/searchs',
    //   name: 'Searchs',
    //   component: Searchs
    // },
    // {
    //   path: '/healthmuseum',
    //   name: 'Healthmuseum',
    //   component: Healthmuseum
    // },
    // {
    //   path: '/focusqrcode',
    //   name: 'Focusqrcode',
    //   component: Focusqrcode
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/freeorder',
    //   name: 'Freeorder',
    //   component: Freeorder
    // },
    // {
    //   path: '/freeorder',
    //   name: 'Freeorder',
    //   component: WxLogin
    // }
  ]
});

export default routers;


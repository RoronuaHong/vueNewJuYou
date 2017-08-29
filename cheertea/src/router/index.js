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
    //地址为空时跳转/cns/index页面
    // {
    //   path: '*',
    //   redirect: '/cns/index'
    // },
    {
      path: '*',
      redirect: 'cns/index'
    },
    {
      // path: '/cns/:name',
      path: '/',
      name: 'Cns',
      component: App,
      redirect: '/cns/index',
      children: [
        // {
        //   path: ' ',
        //   redirect: '/index'
        // },
        // {
        //   path: '*',
        //   redirect: '/index'
        // },
        {
          path: 'cns/index',
          name: 'Index',
          component: Index
        },
        // {
        //   path: '/test',
        //   name: 'Test',
        //   component: Tests
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
        {
          path: 'cns/test',
          name: 'Test',
          component: Tests
        },
        {
          path: 'cns/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: 'cns/car',
          name: 'Car',
          component: Car
        },
        {
          path: 'cns/personcenter',
          name: 'Personcenter',
          component: Personcenter
        },
        {
          path: 'cns/searchs',
          name: 'Searchs',
          component: Searchs
        },
        {
          path: 'cns/healthmuseum',
          name: 'Healthmuseum',
          component: Healthmuseum
        },
        {
          path: 'cns/focusqrcode',
          name: 'Focusqrcode',
          component: Focusqrcode
        },
        {
          path: 'cns/login',
          name: 'Login',
          component: Login
        },
        {
          path: 'cns/freeorder',
          name: 'Freeorder',
          component: Freeorder
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
})
// /*配置微信登录*/
// routers.beforeEach((to, from, next) => {
//
//   //判断是否与其中的值相同，相同则直接输出
//   (store.state.wxLogin.wxloginList).forEach((i) => {
//     if(to.path == i) {
//       //判断是否登录
//       this.$http.get("member/login!isLogin.do", {
//         withCredentials: true
//       })
//         .then(m => {
//           (m.data.res_code == 0) && this.$router.push("wxLogin");
//         })
//         .catch(m => {
//           console.log(m.data);
//         })
//     }
//   })
//
//   next();
// });

export default routers;


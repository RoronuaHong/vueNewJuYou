import router from '@/router'

/*引入axios进行数据通信*/
import axios from 'axios'

/*设置baseURL*/
axios.defaults.baseURL = 'http://wx.cheertea.com/';
// axios.defaults.baseURL = 'http://test.cheertea.com/';
// axios.defaults.baseURL = 'http://192.168.2.21:8080/zxxt_qyy/';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const state = {
  loginPages: [
    '/cns/car',
    '/cns/personcenter'
  ],
  loginBool: false
}

export const actions = {
  isLogin: ({commit}, payload) => {
      axios.get('member/login!isLogin.do', { withCredentials: true })
        .then(m => {
          // console.log(m.data);
          payload = payload || 'index';
          if(state.loginPages.indexOf(payload) !== -1) {
            (m.data.res_code == 0) && router.push({ path: '/cns/login', query: { forward: payload }});
          }
        })
        .catch(m => {
          console.log(m);
        });
  }
}

// export const mutations = {
//   isLogin(state, payload) {
//     payload == 0 ? (state.loginBool = false) : (state.loginBool = true);
//   }
// }
//
// export const getters = {
//   isLogin(state) {
//     return state.loginBool;
//   }
// }

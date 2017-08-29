import * as types from './mutations-types'
export default {
  showLoading: ({commit}) => {
    commit(types.SHOWLOADING);
  },
  hideLoading: ({commit}) => {
    commit(types.HIDELOADING);
  }
}

// export default {
//   increment: ({commit}) => {
//     commit(types.INCREMENT);
//   },
//   decrement: ({commit}) => {
//     commit(types.DECREMENT);
//   }
// }

// export default {
//   increment: ({commit}) => {
//     commit(types.INCREMENT);
//   },
//   decrement: ({commit}) => {
//     commit(types.DECREMENT);
//   },
//   addOdd: ({commit}) => {
//     !!(state.count % 2 === 0) && commit(types.INCREMENT);
//   },
//   addAsync: ({commit}) => {
//     new Promise((resolve, reject) => {
//       setTimeout(function() {
//         commit(types.INCREMENT);
//         resolve();
//       }, 1000);
//     });
//   },
//   isLogin: ({commit}) => {
//     commit('isLogin');
//   },
// }

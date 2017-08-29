// import * as types from './mutations-types'
import {
  SHOWLOADING,
  HIDELOADING
} from './mutations-types'

// import getters from './getters'

// export default {
//   showLoading(state) {
//     state.loading = true;
//   },
//   hideLoading(state) {
//     state.loading = false;
//   }
// }

// const mutations = {
//   [INCREMENT](state) {
//     state.count++;
//   },
//   [DECREMENT](state) {
//     state.count--;
//   }
// }
//
// export default {
//   state,
//   mutations,
//   getters
// }

export default {
  [SHOWLOADING](state) {
    state.loading = true;
  },
  [HIDELOADING](state) {
    state.loading = false;
  }
}

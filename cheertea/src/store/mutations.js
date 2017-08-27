// import * as types from './mutations-types'

import {
  INCREMENT,
  DECREMENT
} from './mutations-types'

// import getters from './getters'

// const state = {
//   count: 10
// }

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
  [INCREMENT](state) {
    state.count++;
  },
  [DECREMENT](state) {
    state.count--;
  }
}

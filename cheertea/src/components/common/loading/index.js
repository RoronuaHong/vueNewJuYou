const LoadingComponent = require('./Loading.vue')
const loading = {
  install: (Vue) => {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading;

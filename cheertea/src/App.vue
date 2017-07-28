<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .mint-header {
    height: 86px;
    line-height: 86px;
    background: #fff;
    font-size: 32px;
    color: #1a1a1a;
    border-bottom: 1px solid #e1e1e2;
  }
  .mint-tabbar {
    height: 84px;
    line-height: 84px;
    background: #fff;
  }
  .mint-tabbar .mint-tab-item-icon {
    width: 42px;
    height: 42px;
  }
  .mint-tab-item {
    color: #414a4c;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fff;
    color: #d82619;
  }
</style>

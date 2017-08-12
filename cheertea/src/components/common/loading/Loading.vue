<template>
  <div id="loading">
    <mt-spinner type="fading-circle" :size="60" color="#ef7c21"></mt-spinner>
  </div>
</template>
<style>
  #loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1000000;
  }
  .mint-spinner-fading-circle {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
</style>

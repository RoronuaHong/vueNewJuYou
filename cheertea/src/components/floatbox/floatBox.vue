<template>
  <div id="floatbox">
    <div class="floatbox" v-if="showHide">
      <router-link :to="floatBoxData.link">
        <img :src="floatBoxData.src" alt="">
        <span class="chacha" @click="isHide"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showHide: true
      }
    },
    props: ['floatBoxData'],
    methods: {
      /*隐藏pk板*/
      isHide() {
        this.showHide = false;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .floatbox {
    position: fixed;
    bottom: 3rem;
    right: 0rem;
    width: 2.5rem;
    height: 2.6rem;
    z-index: 10000;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .chacha {
    position: absolute;
    top: 0;
    right: 0;
    width: .8rem;
    height: .8rem;
  }
</style>

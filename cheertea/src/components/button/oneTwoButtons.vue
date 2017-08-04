<template>
  <div id="oneTwoButtonsBox">
    <div class="oneTwoButtonsBox clearfix">
      <router-link :to="oneTwoButtonsData.big.link">
        <img :src="dataSrcData" :data-src="oneTwoButtonsData.big.src" alt="" class="oneImg">
      </router-link>
      <router-link :to="oneTwoButtonsData.smallFirst.link">
        <img :src="dataSrcData" :data-src="oneTwoButtonsData.smallFirst.src" alt="" class="twoFirstImg">
      </router-link>
      <router-link :to="oneTwoButtonsData.smallSecond.link">
        <img :src="dataSrcData" :data-src="oneTwoButtonsData.smallSecond.src" alt="" class="twoSecondImg">
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['oneTwoButtonsData', 'dataSrcData']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #oneTwoButtonsBox {
    width: 100%;
    margin: 15px 0;
  }
  .oneImg {
    float: left;
    width: 49.5%;
    height: 304px;
  }
  .twoFirstImg {
    float: right;
    width: 49.5%;
    height: 147px;
    padding-bottom: 10px;
  }
  .twoSecondImg {
    float: right;
    width: 49.5%;
    height: 147px;
  }
</style>

<template>
  <div id="buyershop">
    <div class="buyershop clearfix">
      <router-link to="" v-for="item in twoLiButtonsData">
        <li :style="item.back">{{ item.name }}</li>
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
    props: ['twoLiButtonsData']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .buyershop {
    width: 100%;
    li {
      float: left;
      width: 28%;
      height: 1.48rem;
      line-height: 1.48rem;
      padding-left: 22%;
      font-size: .38rem;
      color: #a6a6a6;
      box-shadow: 2px 2px 0 #f0f0f0;
    }
  }
</style>

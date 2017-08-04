<template>
  <div id="twoBigButtons">
    <div class="twoBigButtons clearfix">
      <router-link :to="twoBigButtonsData.left.link">
        <img :src="dataSrcData" :data-src="twoBigButtonsData.left.src" alt="" class="leftImg">
      </router-link>
      <router-link :to="twoBigButtonsData.right.link">
        <img :src="dataSrcData" :data-src="twoBigButtonsData.right.src" alt="" class="rightImg">
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
      props: ['twoBigButtonsData', 'dataSrcData']
    }
</script>
<style>
  .twoBigButtons {
    width: 100%;
    margin: 15px 0;
  }
  .leftImg {
    float: left;
    width: 49.5%;
    height: 130px;
  }
  .rightImg {
    float: right;
    width: 49.5%;
    height: 130px;
  }
</style>

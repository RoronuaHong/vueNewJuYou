<template>
  <mt-swipe :auto="3000">
    <mt-swipe-item
      v-for="item in swipeData"
      :key="item.id"
    >
      <router-link :to="item.url">
        <img :src="item.atturl" alt="">
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
  <!--<mt-swipe :auto="3000">-->
    <!--<mt-swipe-item>-->
      <!--<img src="http://images.cheertea.com/logobanner1.png" alt="">-->
    <!--</mt-swipe-item>-->
  <!--</mt-swipe>-->
</template>
<script>
    // 导入组件
    import { Swipe, SwipeItem } from 'mint-ui';

    export default {
      data() {
        return {

        }
      },
      props: ["swipeData"]
    }
</script>
<!--&lt;!&ndash; 样式代码 &ndash;&gt;-->
<!--<style>-->
  <!---->
<!--</style>-->

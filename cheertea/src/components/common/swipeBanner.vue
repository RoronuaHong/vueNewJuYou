<template>
  <mt-swipe :auto="3000" :prevent="false" :stopPropagation="false">
    <mt-swipe-item
      v-for="item in swipeData"
      :key="item.id"
    >
      <img :src="item.atturl" alt="" @click='go(item.url)'>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
    // 导入组件
    import { Swipe, SwipeItem } from 'mint-ui';

    export default {
      data() {
        return {

        }
      },
      props: ["swipeData"],
      methods: {
        go(path) {
            console.log(path);
            this.$router.push(path);
        }
      }
    }
</script>
<!--&lt;!&ndash; 样式代码 &ndash;&gt;-->
<style>

</style>

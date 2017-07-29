<template>
  <ul class="content clearfix">
    <li v-for="item in fourButtonsData">
      <router-link :to="item.link">
        <img :src="item.src" alt="">
        <span>{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['fourButtonsData']
  }
</script>
<style>
  .content {
    width: 100%;
    height: 2.3rem;
  }
  .content li {
    float: left;
    width: 25%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .content img {
    display: block;
    width: 1.14rem;
    height: 1.14rem;
    margin: .2rem auto 0;
    vertical-align: middle;
  }
  .content span {
    display: block;
    width: 100%;
    padding-top: .2rem;
    font-size: .34rem;
    text-align: center;
    color: #6a6a6a;
  }
</style>

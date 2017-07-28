<template>
  <header class="clearfix">
    <router-link to="guide" class="guide">导购</router-link>
    <router-link to="searchs" class="search">搜索你想要的商品<div class="searchbg"></div></router-link>
    <router-link to="" class="service">客服</router-link>
  </header>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style>
  header {
    width: 100%;
    height: 1.34rem;
    line-height:1.34rem;
  }
  .guide, .service {
    float: left;
    width: 12%;
    height: 1.34rem;
    line-height: 1.9rem;
    font-size: .28rem;
    text-align: center;
    color: #292a2a;
  }
  .search {
    position: relative;
    float: left;
    width: 66%;
    height: .94rem;
    line-height: .94rem;
    margin: .2rem 0;
    padding: 0 4%;
    background: #f3f3f3;
    font-size: .38rem;
    color: #1a1a1a;
    border-radius: .3rem;
  }
  .searchbg {
    position: absolute;
    top: 0;
    right: 1.5%;
    width: .94rem;
    height: .94rem;
    background: url("http://images.cheertea.com/searchbg.png") 0 0 no-repeat;
    background-size: contain;
  }
</style>

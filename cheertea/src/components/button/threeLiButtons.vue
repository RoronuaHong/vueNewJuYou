<template>
  <div id="threeLiBottons">
    <div class="threeLiBottons clearfix">
      <ul class="allshops">
        <li v-for="item in BussinessData" :key="item.id">
          <router-link :to="item.link">
            <img :src="item.src" alt="">
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['BussinessData']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .threeLiBottons {
    width: 100%;
  }
  .allshops {
    width: 96%;
    padding: .14rem 2%;
    li {
      float: left;
      width: 33%;
      height: 1.7rem;
      border-right: 2px solid #f0f0f0;
      border-bottom: 2px solid #f0f0f0;
      img {
        display: block;
        width: 99%;
        height: .8rem;
      }
      span {
        float: left;
        width: 99%;
        height: .7rem;
        font-size: .38rem;
        text-align: center;
        color: #a6a6a6;
      }
    }
    li:nth-child(3n) {
      border-right: 0 solid #f0f0f0;
    }
  }
</style>

<template>
  <div id="myOrder">
    <div class="myOrder">
      <div class="myorders">
        <router-link to="">
          <span>{{ myOrderData.title }}</span> <strong>{{ myOrderData.other }}</strong>
        </router-link>
      </div>
      <div class="customerservice clearfix">
        <li v-for="item in myOrderData.order" :key="item.id">
          <router-link :to="item.link">
            <img :src="item.src" alt="" class="orderimg">
            {{ item.name }}
            <span class="remind" v-if="item.num > 0">{{ item.num }}</span>
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['myOrderData']
  }
</script>
<style rel="stylesheet" lang="scss" scoped>
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";
  .myOrder {
    width: 100%;
  }
  .myorders {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #f0f0f0;
    background: url($imgurl + "myorderbg.png") 0 0 no-repeat;
    background-size: contain;
    span {
      padding-left: 12%;
      float: left;
      font-size: .38rem;
      color: #363636;
    }
    strong {
      float: left;
      padding: 0 9.8% 0 42%;
      font-size: .3rem;
      color: #a4a4a4;
      background: url($imgurl + "myorderarrow.png") 6.4rem 0 no-repeat;
      background-size: contain;
    }
  }
  .customerservice {
    width: 100%;
    margin-bottom: .17rem;
    li {
      position: relative;
      float: left;
      width: 25%;
      height: 1.56rem;
      text-align: center;
    }
    .remind {
      position: absolute;
      top: .25rem;
      right: .75rem;
      display: inline-block;
      width: .34rem;
      height: .34rem;
      line-height: .34rem;
      background: #ff0000;
      font-size: .27rem;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
      color: white;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      font-size: .28rem;
      color: #a6a6a6;
    }
    .orderimg {
      display: block;
      width: 100%;
      height: 60%;
      margin: 0 auto;
    }
  }
</style>

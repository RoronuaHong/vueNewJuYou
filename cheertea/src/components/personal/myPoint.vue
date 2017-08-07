<template>
  <div id="myPoint">
    <div class="myPoint clearfix">
      <div class="myorders">
        <router-link to="">
          <span>我的积分</span> <strong>查看全部资产</strong>
        </router-link>
      </div>
      <div class="moneycon">
        <router-link to="">
          <span>42829.77</span>
          <strong>白积分</strong>
        </router-link>
      </div>
      <div class="moneycon">
        <router-link to="">
          <span>42829.77</span>
          <strong>红积分</strong>
        </router-link>
      </div>
      <div class="moneycon">
        <router-link to="">
          <span>42829.77</span>
          <strong>绿积分</strong>
        </router-link>
      </div>
      <div class="moneycon">
        <router-link to="">
          <span>42829.77</span>
          <strong>预存款</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";
  .myPoint {
    width: 100%;
    padding: .14rem 0 .36rem;
    background: white;
    border-bottom: .14rem solid #f7f7f7;
  }
  .myorders {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #f0f0f0;
    background: url($imgurl + "myorderbgs.png") 0 0 no-repeat;
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
  .moneycon {
    float: left;
    width: 24.5%;
    margin-top: .36rem;
    border-right: 1px solid #f0f0f0;
    span {
      float: left;
      width: 100%;
      height: .4rem;
      padding-bottom: .1rem;
      font-size: .38rem;
      text-align: center;
      color: #ff0000;
    }
    strong {
      float: left;
      width: 90%;
      height: .38rem;
      padding-left: 5%;
      font-size: .28rem;
      text-align: center;
      color: #a6a6a6;
    }
  }
</style>

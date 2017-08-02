<template>
  <div id="scrollThreeGoods">
    <div class="outerbox">
      <ul class="scrollThreeGoodsbox">
        <li v-for="item in getThreeAjaxData" :ids="item.goods_id" :activityId="item.activity_id" :acpr="item.activity_price">
          <router-link to="a">
            <img :src="item.image" alt="" class="imgli">
            <div class="contents">
              <p class="two-title">{{ item.name }}</p>
              <div class="two-price clearfix">
                <span class="newprice">￥<strong>{{ item.price }}</strong>.00</span>
              </div>
            </div>
          </router-link>
        </li>
        <li class="last">
          <router-link :to="hrefLink">

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
    props: ['getThreeAjaxData', 'hrefLink']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #scrollThreeGoods {
    width: 100%;
    height: 300px;
    padding: 15px 0;
  }
  .outerbox {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    .scrollThreeGoodsbox {
      min-width: 310%;
      height: 100%;
      li {
        float: left;
        width: 175px;
        height: 77%;
        margin: .7%;
        padding: .5% 10px;
        box-shadow: 0 0 0 3px #e6e6e6;
      }
      .last {
        width: 185px;
        height: 185px;
        margin: 45px 0 0 1.5%;
        background: url("http://images.cheertea.com//cosmetics-more.png") 0 0 no-repeat;
        background-size: contain;
      }
    }
    .imgli {
      display: block;
      width: 100%;
      height: 165px;
    }
    .two-title {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
      white-space: nowrap;
      width: 100%;
      height: .59rem;
      line-height: .59rem;
      font-size: 22px;
      color: #000;
    }
    .two-price {
      width: 100%;
      height: .5rem;
      line-height: .5rem;
      .newprice {
        float: left;
        height: 100%;
        color: red;
      }
      strong {
        font-size: 26px;
      }
    }
  }
</style>

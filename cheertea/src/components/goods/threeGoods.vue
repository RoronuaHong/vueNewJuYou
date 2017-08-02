<template>
  <div id="threegoods">
    <ul class="threebox clearfix">
      <li v-for="item in getThreeAjaxData" :ids="item.goods_id" :activityId="item.activity_id" :acpr="item.activity_price">
        <router-link to="">
          <img :src="item.image" alt="">
          <div class="contents">
            <p class="two-title">{{ item.name }}</p>
            <div class="two-price clearfix">
              <span class="newprice">￥<strong>{{ item.price }}</strong>.00</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

    // 导入组件

    export default {
      data() {
        return {

        }
      },
      props: ['getThreeAjaxData']
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .threebox {
    width: 100%;
    li {
      width: 27.333%;
      margin: .3rem 1%;
      padding: .2rem 2%;
      float: left;
      box-shadow: 0 15px 0 0 #fff,
                  0 -15px 0 0 #fff,
                  inset 0 0 0 3px #e6e6e6;
      img {
        display: block;
        width: 100%;
        height: 2.7rem;
      }
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

<template>
  <div id="twoGoods" class="clearfix">
    <div v-for="item in getTwoAjaxData" class="recommendgoodscon" :ids="item.goods_id" :activityId="item.activity_id" :acpr="item.activity_price">
      <router-link to="ccc">
        <img :src="item.image" :data-src="item.image" alt="">
      </router-link>
      <div class="goodsmessage">
        <div class="messages">
          <p>{{ item.name }}</p>
          <span>￥<em>{{ item.price }}</em>.00</span>
        </div>
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
    props: ['getTwoAjaxData']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  /*cdn*/
  $imgurl: "http://img.cheetea.com/";

  /*本地*/
  /* $imgurl: "../images/"; */
  .recommendgoodscon {
    position: relative;
    float: left;
    width: 48%;
    height: 6.34rem;
    margin-bottom: .13rem;
    background: white;
    border-left: .15rem solid #fff;
    img {
      display: block;
      width: 100%;
      height: 4.53rem;
    }
    .goodsmessage {
      width: 100%;
      height: 1.47rem;
      .goodscar, .goodscars {
        float: left;
        width: 20%;
        height: 100%;
        background: url($imgurl + "sprites.png") -3.35rem -2rem no-repeat;
        background-size: 10rem 4.7rem;
      }
    }
    .messages, .messagess {
      float: left;
      width: 100%;
      height: .57rem;
      padding-top: .2rem;
      p {
        font-size: .35rem;
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        white-space: nowrap;
      }
      span {
          float: left;
          padding-top: .2rem;
          font-size: .28rem;
          color: #ff0000;
        em {
          font-size: .41rem;
          color: #ff0000;
        }
      }
      strong {
        display: none;
        float: left;
        padding: .35rem 0 0 .4rem;
        font-size: .22rem;
        color: #595757;
        text-decoration: line-through;
      }
    }
    .messagess {
      padding-top: -.2rem;
      span {
        padding-top: 0;
      }
    }
  }
</style>

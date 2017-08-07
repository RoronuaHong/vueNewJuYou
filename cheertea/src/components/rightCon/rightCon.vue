<template>
  <div id="rightconbox">
    <div class="rightconbox">
      <div class="rightcon">
        <dl
          v-for="item in rightConData.children"
          :catId="item.cat_id">
          <dt>
            <strong></strong>
            <span>{{ item.name }}</span>
            <router-link to="" class="aTo"></router-link>
          </dt>
          <dd class="clearfix">
            <router-link
              to=""
              v-for="items in item.childrenList"
              :key="items.cat_id"
            >
              <img :src="items.image || defaultImg" alt="">
              <span>{{ items.name }}</span>
            </router-link>
          </dd>
        </dl>
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
      props: ['rightConData', 'defaultImg']
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";
  .rightconbox {
    position: fixed;
    right: 0;
    overflow: auto;
    width: 80%;
    -webkit-overflow-scrolling: touch;
    .rightcon {
      width: 100%;
    }
  }
  dl {
    width: 100%;
    dt {
      width: 90%;
      height: 1rem;
      padding: 0 5%;
      line-height: 1rem;
      background: #f7f7f7;
      -webkit-box-shadow: inset -1px 0 .02rem 0 #d5d5d6;
      -moz-box-shadow: inset 0 -1px 0 .02rem #d5d5d6;
      -ms-box-shadow: inset 0 -1px 0 .02rem #d5d5d6;
      box-shadow: inset 0 -1px .02rem 0 #d5d5d6;
      strong {
        display: block;
        float: left;
        width: .19rem;
        height: .19rem;
        margin: .4rem 0 0 1%;
        background: #ea5925;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
      }
      span {
        overflow: hidden;
        float: left;
        width: 5rem;
        height: 100%;
        padding-left: 3%;
        font-size: .38rem;
        color: #ea5925;
      }
      .aTo {
        display: block;
        float: right;
        width: 8%;
        height: 90%;
        background: url($imgurl + "goodsmore.png") 0 0.05rem no-repeat;
        background-size: contain;
        -webkit-tap-highlight-color: transparent;
      }
    }
    dd {
      width: 90%;
      min-height: 2rem;
      padding: 5%;
      a {
        overflow: hidden;
        display: block;
        float: left;
        width: 27%;
        margin: 2% 3%;
        font-size: .34rem;
        text-align: center;
        color: #565757;
        box-shadow: 0 0 0 .03rem #e0e0e0;
        -webkit-tap-highlight-color: transparent;
        img {
          display: block;
          width: 100%;
          height: 1.82rem;
        }
        span {
          display: inline-block;
          height: .52rem;
          line-height: .52rem;
          color: #565757;
        }
      }
    }
  }
</style>

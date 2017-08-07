<template>
  <div id="personcenterbanner">
    <div class="personcenterbanner">
      <p class="titleid">ID号:{{ myPointData.member_id }}</p>
      <div class="bannercontent clearfix">
        <div class="bannerbox">
          <img src="http://wx.qlogo.cn/mmopen/IxiaykwZCgd2BmzA1S7UpODfUgaPibr0ROIAiaxCIB8HLKONG11qokwDTscsojDjQZVyXEqpPq96UZD066ThjT0gkn71UXVcjWW/0" alt="">
        </div>
        <div class="maincon">
          <div class="name clearfix">
            <span class="emoji">{{ myPointData.nickname }}</span>
            <a href="" class="identification">认证中</a>
          </div>
          <div class="personothers clearfix">
            <div class="vip">
              <img src="http://others.cheertea.com/themes/default/images/diamondimg.png" alt="">
              <span>{{ myPointData.lvname }}</span>
            </div>
            <a href="member_applyshop.html" class="upgrade">点我升级</a>
          </div>
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
    props: ['myPointData']
  }
</script>
<style rel="stylesheet" lang="scss" scoped>
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";
  .personcenterbanner {
    width: 100%;
    height: 3.95rem;
    background: url($imgurl + "newpersonbanner.png") 0 0 no-repeat;
    background-size: cover;
    .titleid {
      width: 88%;
      height: .75rem;
      padding: 0 6%;
      line-height: .75rem;
      font-size: .25rem;
      text-align: right;
      color: #fff;
    }
    .bannercontent {
      width: 86%;
      padding: 0 7% .6rem;
    }
    .bannerbox {
      overflow: hidden;
      float: left;
      width: 19%;
      height: 1.64rem;
      margin-right: 5%;
      box-shadow: 0.02rem 0 1rem #fff;
      border-radius: 50%;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    span {
      float: left;
      padding-right: 20%;
      font-size: .38rem;
      color: #fff;
    }
    .identification {
      float: left;
      padding: .1rem .2rem;
      font-size: .22rem;
      box-shadow: inset 0 0 0 0.03rem white;
      color: #fff;
      -webkit-border-radius: .1rem;
      -moz-border-radius: .1rem;
      border-radius: .1rem;
    }
  }
  .maincon {
    float: left;
    width: 76%;
  }
  .personothers {
    width: 100%;
    padding-top: .3rem;
    .vip {
      float: left;
      width: 45%;
      height: .55rem;
      line-height: .55rem;
      background: rgba(255, 255, 255, 0.3);
      font-size: .34rem;
      color: white;
      -webkit-border-radius: 1rem;
      -moz-border-radius: 1rem;
      -ms-border-radius: 1rem;
      border-radius: 1rem;
      img {
        display: block;
        float: left;
        width: .47rem;
        height: .47rem;
        margin: .05rem 0 0 .05rem;
      }
      span {
        float: left;
        padding-left: .2rem;
        color: #000;
      }
    }
  }
  .upgrade {
    float: left;
    height: .55rem;
    padding: 0 12% 0 8%;
    line-height: .6rem;
    font-size: .31rem;
    background: url($imgurl + "personupgradearrow.png") 1.8rem 0 no-repeat;
    background-size: contain;
    color: rgba(255, 255, 255, 0.4);
    -webkit-tap-highlight-color: transparent;
  }
</style>

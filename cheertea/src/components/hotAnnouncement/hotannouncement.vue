<template>
  <div id="hotannouncement">
    <div class="hotspot">
      <strong>{{ hotAnnouncements.title }}</strong>
      <div class="outerbox" id="outerbox">
        <ul class="innerbox" id="innerbox">
          <li><em class='laba'></em>{{ hotAnnouncements.name }}</li>
          <li><em class='laba'></em>{{ hotAnnouncements.name }}</li>
        </ul>
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
      props: ['hotAnnouncements']
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  /* $imgurl: "../images/"; */

  .hotspot {
    width: 100%;
    height: .69rem;
    line-height: .69rem;
    box-shadow: 0 -.19rem 0 0 #f6f6f6;
    border-top: .03rem solid #dadada;
    border-bottom: .03rem solid #dadada;
    background: white;
    strong {
      float: left;
      padding: 0 3%;
      font-size: .28rem;
      font-weight: bold;
      box-shadow: .03rem 0 0 0 #c4c4c4;
    }
  }
  .outerbox {
    position: relative;
    overflow: hidden;
    float: right;
    width: 80%;
    height: 100%;
    .innerbox {
      position: absolute;
      top: 0;
      left: 0;
      float: left;
      width: 200% !important;
      height: 100%;
      animation: wheels 5s linear infinite;
    }
    li {
      min-width: 7rem;
      height: 100%;
      float: left;
      font-size: 18px;
      color: #8a8888;
    }
    .laba {
      float: left;
      width: .8rem;
      height: 100%;
      background: url($imgurl + "sprites.png") -7.16rem -2.08rem no-repeat;
      background-size: 10rem 4.7rem;
    }
    /*实现动画*/
    @keyframes wheels {
      from {
        transform: translateX(0rem);
      }
      to {
        transform: translateX(-7rem);
      }
    }
  }
</style>

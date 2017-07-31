<template>
  <div id="focusqrcode">
    <Headers></Headers>
    <div class="imgbox">
      <img src="http://images.cheertea.com/qyy.jpeg" alt="">
      <p class="texts">关注公众号</p>
    </div>
  </div>
</template>
<script>

    //导入组件
    import Headers from "@/components/common/commonHeader.vue"

    export default {
      data() {
        return {

        }
      },
      components: {
          Headers
      }
    }
</script>
<style>
  body, html {
    width: 100% !important;
    height: 100% !important;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  #focusqrcode {
    width: 100%;
    height: 100%;
    background: url("http://images.cheertea.com/focuspublicnumber.png") no-repeat;
    background-size: 100% 100%;
  }
  .imgbox {
    position: fixed;
    top: -2rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 5.2rem;
    height: 5.2rem;
  }
  .imgbox img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .imgbox .texts {
    width: 100%;
    height: 1.40625rem;
    line-height: 1.40625rem;
    font-size: .65625rem;
    text-align: center;
    color: #323232;
  }
</style>

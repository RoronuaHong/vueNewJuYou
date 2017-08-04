<template>
  <div id="returntopandpagesum">
    <div class="returntopandpagesum" @click="returns"></div>
  </div>
</template>
<script>

  //导入插件
  import '@/assets/js/tools/throttle.js'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.returnTops();
    },
    methods: {
      /*滚动条事件*/
      returnTops() {
        var returnTopBtn = document.querySelector('.returntopandpagesum');

        //获取屏幕的可见高度
        var screenH = window.screen.height;

        //判断是否需要显示返回顶部
        document.addEventListener("scroll", ThrottleUtil.throttle(function() {
          document.body.scrollTop >= screenH ? (returnTopBtn.style.display = "block") : (returnTopBtn.style.display = "none");
          if(document.body.scrollTop >= screenH) {
            returnTopBtn.style.display = "block";
          } else {
            returnTopBtn.style.display = "none";
          }
        }, this, 1000, 1000), false);
      },
      /*返回顶部*/
      returns() {
        var _this = this;
        //返回的速度
        var scrollSpeed = 50;

        //将scrollTop降至0
        clearInterval(this.timer);
        this.timer = setInterval(function() {
          if(document.body.scrollTop > 0) {
            document.body.scrollTop -= scrollSpeed;
          } else {
            document.body.scrollTop = 0;
            clearInterval(_this.timer);
          }
        }, 16);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .returntopandpagesum {
    display: none;
    position: fixed;
    bottom: 1.4rem;
    right: .47rem;
    width: 9%;
    height: .94rem;
    z-index: 150;
    background: url(http://images.cheertea.com/sprites.png) -4.69rem -2.08rem no-repeat;
    background-size: 10rem 4.7rem;
  }
</style>

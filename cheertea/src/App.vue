<script src="../../../MyPlugin/gulpfile.js"></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

  //全局引入common.scss
  import "@/assets/css/common/vuecommon.scss"

  //全局引入js
  import "@/assets/js/tools/lazyLoadPlugin.min.js"

  export default {
    data() {
      return {
        name: 'app'
      }
    },
    mounted() {

      //加入百度统计
      this.baiduCount();

      //图片懒加载
      this.lazyLoad();
    },
    methods: {
      /*百度统计*/
      baiduCount() {
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?68df874fd78fd8f5cdv45fd470a49b12";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      },
      /*图片懒加载*/
      lazyLoad() {
        /*延迟加载图片插件*/
        new lazyLoadPlugin({
          element: "img",                 //元素的名称
          attributes: "src",              //被转换的元素属性
          dataAttributes: "data-src",     //转换的属性
          offsetTop: 500,                 //显示的垂直距离
          offsetLeft: 0,                  //显示的水平距离
          duraction: 800,                 //固定的毫秒内必触发
          delay: 500,                     //事件不动的时候触发
          ele: "scroll"                   //默认事件为滚动事件
        }).init();
      }
    }
  }
</script>
<style>
  .mint-header {
    height: 86px;
    line-height: 86px;
    background: #fff;
    font-size: 32px;
    color: #1a1a1a;
    border-bottom: 1px solid #e1e1e2;
  }
  .mint-tabbar {
    height: 84px;
    line-height: 84px;
    background: #fff;
    border-top: 1px solid #ccc;
  }
  .mint-tabbar .mint-tab-item-icon {
    width: 42px;
    height: 42px;
  }
  .mint-tab-item {
    color: #414a4c;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fff;
    color: #d82619;
  }

  /*修改Toast的宽高*/
  .mint-toast {
    min-width: 50%;
    border-radius: .5rem;
  }
  .mint-toast-text {
    font-size: 30px;
  }
  .mint-tab-item-label {
    font-size: 20px !important;
  }
</style>

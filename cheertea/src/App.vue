<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <transition name="fade" mode="out-in">
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>
<script>

  //全局引入common.scss
  import "@/assets/css/common/vuecommon.scss"
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        name: 'app'
      }
    },
    mounted() {

      //加入百度统计
      this.baiduCount();

      //设置mintUI
      this.setEle();
    },
    computed: mapGetters([
      'loading'
    ]),
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
      /*设置mintUI*/
      setEle() {
        var ele = document.querySelectorAll('.mint-cell .mint-cell-wrapper');
        ele = Array.prototype.slice.call(ele);
        ele.forEach((item)=> {
          item.style.fontSize = ".4rem";
        });
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
  .mint-field-state .mintui {
      font-size: .5rem !important;
  }
  /*淡入淡出效果*/
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

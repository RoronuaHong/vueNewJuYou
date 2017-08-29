<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <transition name="fade" mode="out-in">
      <!--<keep-alive>-->
        <router-view v-cloak></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>
<script>

  //全局引入common.scss
  import "@/assets/css/common/vuecommon.scss"
  import { mapGetters, mapActions } from 'vuex'

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

      //实现微信登录
      this.wxloginFun();
    },
    computed: {
      ...mapGetters([
        'loading'
      ])
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
      /*设置mintUI*/
      setEle() {
        var ele = document.querySelectorAll('.mint-cell .mint-cell-wrapper');
        ele = Array.prototype.slice.call(ele);
        ele.forEach((item)=> {
          item.style.fontSize = ".4rem";
        });
      },
      /*实现微信登录*/
      wxloginFun() {
        //获取微信的登录状态
        this.$http.get("member/login!isLogin.do", {
            withCredentials: true
        })
          .then(m => {
//              console.log(m.data);
//              console.log(this.$store.state.commonHeader);
          })
          .catch(m => {
              console.log(m.data);
          })
      },
      preventDefault() {
        document.querySelector('body').addEventListener("click", (event) => {
          event.preventDefault();
        }, false);
      }
//      ...mapActions([
//        'isLogin'
//      ])
    },
    watch: {
      $route(to, from) {
        //判断是否登录
        this.$store.dispatch("isLogin", to.path);
      }
    }
  }
</script>
<style>
  .mint-header {
    height: 86px !important;
    line-height: 86px !important;
    background: #fff !important;
    font-size: 32px !important;
    color: #1a1a1a !important;
    border-bottom: 1px solid #e1e1e2 !important;
  }
  .mint-tabbar {
    height: 84px !important;
    line-height: 84px !important;
    background: #fff !important;
    border-top: 1px solid #ccc !important;
  }
  .mint-tabbar .mint-tab-item-icon {
    width: 42px !important;
    height: 42px !important;
  }
  .mint-tab-item {
    color: #414a4c !important;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fff !important;
    color: #d82619 !important;
  }

  /*修改Toast的宽高*/
  .mint-toast {
    min-width: 50% !important;
    border-radius: .5rem !important;
  }
  .mint-toast-text {
    font-size: 30px !important;
  }
  .mint-tab-item-label {
    font-size: 20px !important;
  }
  .mint-field-state .mintui {
      font-size: .5rem !important;
  }
  /*淡入淡出效果*/
  .fade-enter-active, .fade-leave-active {
    opacity: 1 !important;
    transition: opacity .1s !important;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0 !important;
  }

  /*防止闪烁*/
  [v-cloak] {
    display: none;
  }
</style>

<template>
  <div id="personcenter">
    <Pcban :myPointData="myPointData"></Pcban>
    <div class="box">
      <mt-navbar v-model="active">
        <mt-tab-item id="1">我是卖家<em>商家</em></mt-tab-item>
        <mt-tab-item id="2">我是买家<em>会员</em></mt-tab-item>
      </mt-navbar>
      <div class="page-tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="1">

          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <myPoint></myPoint>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <Footers></Footers>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import Pcban from '@/components/personal/personalBanner.vue'
  import myPoint from '@/components/personal/myPoint.vue'

  //导入js
  import * as Emojis from '@/assets/js/lib/emoji.js'

  export default {
    data() {
      return {
        active: '2',
        /*我的积分数据*/
        myPointData: {}
        /*我的订单数据*/
      }
    },
    components: {
      Headers,
      Footers,
      Pcban,
      myPoint
    },
    created() {

      /*获取个人中心数据*/
      this.getPersonalData();
    },
    mounted() {
        var that = this;
      /*使用emoji*/
      setTimeout(function() {
        that.emojiFun();
      }, 0)
    },
    methods: {
      getPersonalData() {
        this.$http.get("member/memberIndex!getData.do", { withCredentials: true })
          .then(m => {
            console.log(m.data);

            //跳转到登陆页
//            !!(m.data.res_code === 0) && this.$router.push("login");

            if(m.data.res_code === 1) {
              this.myPointData = m.data.res_data.member;
            }
          })
          .catch(m => {
//            console.log(m.data);
          });
      },
      emojiFun() {

        /*获取emoji的html*/
        var emojiEle = document.querySelector(".emoji");
        var emojiHtml = Emojis.Emoji.emoji(emojiEle);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .box {
    position: relative;
    top: -.95rem;
    left: 0;
    width: 100%;
  }
  /*tab切换按钮样式*/
  .mint-tab-container {
    width: 100%;
  }
  .mint-tab-container-wrap {
    width: 100%;
  }
  .mint-tab-container-item {
    float: left;
    width: 100%;
  }
  .page-tab-container {
    width: 100%;
  }
  .mint-navbar {
    background: rgba(255, 255, 255, 0.4);
    .mint-tab-item {
      height: .64rem;
      line-height: .64rem;
      padding: .3rem 0 0;
      border: none;
      color: #fff;
      box-shadow: 0 0 0 transparent;
      outline: none;
      em {
        margin-left: 5%;
        font-size: .3rem;
        padding: .1rem .2rem;
        background: #f2b4a3;
        color: #6d6d6d;
        box-shadow: 0 0 0 0.02rem #da9c8b;
        border-radius: .4rem;
        background: #f2b3ad;
      }
    }
    .mint-tab-item.is-selected {
      background: #f0503d;
      opacity: 1;
    }
    .mint-tab-item.is-selected em {
      color: #f0503d;
      opacity: 1;
      box-shadow: 0 0 0 0.02rem #da9c8b;
    }
  }
</style>

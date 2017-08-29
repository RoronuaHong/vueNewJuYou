<template>
  <div id="personcenter">
    <Pcban :mineData="mineData"></Pcban>
    <div class="box">
      <mt-navbar v-model="active">
        <mt-tab-item id="1">我是卖家<em>商家</em></mt-tab-item>
        <mt-tab-item id="2">我是买家<em>会员</em></mt-tab-item>
      </mt-navbar>
      <div class="page-tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="1">
            <threeLiButtons :BussinessData="BussinessData"></threeLiButtons>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <myPoint :myPointData="myPointData"></myPoint>
            <myOrder :myOrderData="myOrderData"></myOrder>
            <div class="applyforshop">
              <router-link to="">
                点击此处购买体验商品，升级会员
              </router-link>
            </div>
            <twoLiButtons :twoLiButtonsData="twoLiButtonsData"></twoLiButtons>
            <a class="download" @click="downapp">下载app</a>
            <a class="logoff" @click="logoffs">注销账户</a>
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
  import myOrder from '@/components/personal/myOrder.vue'
  import twoLiButtons from '@/components/button/twoLiButtons.vue'
  import threeLiButtons from '@/components/button/threeLiButtons.vue'

  //导入js
  import * as Emojis from '@/assets/js/lib/emoji.js'

  export default {
    data() {
      return {
        active: '2',
        /*我的资料数据*/
        mineData: {},
        /*我的积分*/
        myPointData: {
          title: "我的积分",
          other: "查看全部资产",
          links: "",
          point: [
            {
              name: "白积分",
              gold: "",
              link: ""
            },
            {
              name: "红积分",
              gold: "",
              link: ""
            },
            {
              name: "绿积分",
              gold: "",
              link: ""
            },
            {
              name: "预存款",
              gold: "",
              link: ""
            }
          ]
        },
        /*我的订单数据*/
        myOrderData: {
          title: "我的订单",
          other: "查看我的订单",
          links: "",
          order: [
            {
              name: "待付款",
              src: "http://images.cheertea.com/customerservicebg1.png",
              link: "",
              num: ""
            },
            {
              name: "待发货",
              src: "http://images.cheertea.com/customerservicebg2.png",
              link: "",
              num: ""
            },
            {
              name: "待收货",
              src: "http://images.cheertea.com/customerservicebg3.png",
              link: "",
              num: ""
            },
            {
              name: "售后",
              src: "http://images.cheertea.com/customerservicebg4.png",
              link: "",
              num: ""
            }
          ]
        },
        /*双li列表数据*/
        twoLiButtonsData: [
          {
            name: "指尖分享",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg1.png) -.02rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "关注巨柚",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg1.png) -.02rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "我的资料",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg2.png) -.18rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "我的会员",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg3.png) 0 center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "我的收藏",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg4.png) -.18rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "我的红包",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg5.png) 0 center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "地址管理",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg6.png) -0.18rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "我的评价",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg7.png) .04rem center no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "安全设置",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg8.png) -0.17rem 0 no-repeat",
              backgroundSize: "contain"
            },
            link: ""
          },
          {
            name: "创建店铺",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg9.png) -.26rem .15rem no-repeat",
              backgroundSize: "45%"
            },
            link: ""
          },
          {
            name: "商家认证",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg10.png) -0.35rem .1rem no-repeat",
              backgroundSize: "47%"
            },
            link: ""
          },
          {
            name: "绑定手机",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg13.png) 1.26rem 0.45rem no-repeat",
              backgroundSize: "10.5%"
            },
            link: ""
          },
          {
            name: "我的业绩",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg12.png) -0.25rem 0.02rem no-repeat",
              backgroundSize: "45%"
            },
            link: ""
          },
          {
            name: "我的收益",
            back: {
              background: "url(http://images.cheertea.com/buyershopbg11.png) -0.22rem 0.02rem no-repeat",
              backgroundSize: "45%"
            },
            link: ""
          }
        ],
        /*商家数据*/
        BussinessData: [
          {
            name: "我的商品",
            src: "http://images.cheertea.com/bullsimg1.png",
            link: ""
          },
          {
            name: "我要收银",
            src: "http://images.cheertea.com/bullsimg2.png",
            link: ""
          },
          {
            name: "订单中心",
            src: "http://images.cheertea.com/bullsimg3.png",
            link: ""
          },
          {
            name: "店铺设置",
            src: "http://images.cheertea.com/bullsimg4.png",
            link: ""
          },
          {
            name: "推广店铺",
            src: "http://images.cheertea.com/bullsimg5.png",
            link: ""
          },
          {
            name: "预览店铺",
            src: "http://images.cheertea.com/bullsimg6.png",
            link: ""
          },
          {
            name: "绿积分充值",
            src: "http://images.cheertea.com/greenpointbg.png",
            link: ""
          }
        ]
      }
    },
    components: {
      Headers,
      Footers,
      Pcban,
      myPoint,
      myOrder,
      twoLiButtons,
      threeLiButtons
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
      }, 500);
    },
    methods: {
      getPersonalData() {
        this.$http.get("member/memberIndex!getData.do", { withCredentials: true })
          .then(m => {
            console.log(m.data);

            //跳转到登陆页
//            !!(m.data.res_code === 0) && this.$router.push("login");

            if(m.data.res_code === 1) {
              this.mineData = m.data.res_data.member;
              console.log(this.mineData);

              //将名字用emoji进行转换
              console.log(this.mineData.nickname);

              //截取积分保留两位小数
              this.myPointData.point[0].gold = (this.mineData.point).toFixed(2);
              this.myPointData.point[1].gold = (this.mineData.point_red).toFixed(2);
              this.myPointData.point[2].gold = (this.mineData.point_green).toFixed(2);
              this.myPointData.point[3].gold = (this.mineData.advance).toFixed(2);

              //获取订单数字数据
              this.myOrderData.order[0].num = m.data.res_data.topay_num;
              this.myOrderData.order[1].num = m.data.res_data.todelivery_num;
              this.myOrderData.order[2].num = m.data.res_data.toreceive_num;
              this.myOrderData.order[3].num = m.data.res_data.toservice_num;
            }

            //未登录时候自动跳转到个人中心
//            if(m.data.res_code == 0) {
//              this.$router.push("login");
//            }
          })
          .catch(m => {
//            console.log(m.data);
          });
      },
      emojiFun() {
        /*获取emoji的html*/
        var emojiEle = document.querySelector('.emoji');
        var emojiHtml = Emojis.Emoji.emoji(emojiEle);
      },
      downapp() {
        var u = navigator.userAgent,
          isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
          isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          urls = {
            'android':'http://imtt.dd.qq.com/16891/47CCB8962D58DC5AD41705631B4800F1.apk?fsname=com.cheertea.shop_1.0_1.apk&csr=1bbd',
            'ios':'https://itunes.apple.com/cn/app/%E5%B7%A8%E6%9F%9A/id1236603713?mt=8',
            'other':'http://www1.pcauto.com.cn/app/20141120/pcautoapp/index.html'
          };
        //三元运算
//         window.location.href = isAndroid ? urls.android : isiOS? urls.ios : urls.other;
//        //简化
        if(isAndroid){
          window.location.href = urls.android;
        }else if(isiOS){
          window.location.href = urls.ios;
        }else{
          window.location.href = urls.other;
        }
      },
      logoffs() {
        this.$http.get("member/logout!logout.do", {
          withCredentials: true
        })
          .then(m => {
//            console.log(m.data);
            this.$router.push("login");
          })
          .catch(m => {
//            console.log(m.data);
          });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";

  #personcenter {
    width: 100%;
  }
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
  .applyforshop {
    width: 76%;
    height: 1.44rem;
    padding-left: 24%;
    line-height: 1.44rem;
    background: #f7f7f7 url($imgurl + "applyforshopbgs.png") 0 0 no-repeat;
    background-size: contain;
    border-bottom: .02rem solid #f0f0f0;
    a {
      display: block;
      font-size: .42rem;
      color: #a6a6a6;
      -webkit-tap-highlight-color: transparent;
    }
  }
  .download {
    display: block;
    width: 100%; height: 1.36rem;
    line-height: 1.36rem;
    background: #f7f7f7;
    font-size: .47rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: #ffa200;
  }
  .logoff {
    display: block;
    width: 100%;
    height: 1.36rem;
    margin-bottom: .2rem;
    line-height: 1.36rem;
    background: #f7f7f7;
    font-size: .47rem;
    text-align: center;
    color: #ec4c3a;
  }
</style>

<template>
  <div id="indexwrap">
    <Headers :searchHeaderData="searchHeaderData"></Headers>
    <swipeBanner :swipeData="swipeData"></swipeBanner>
    <fourButton :fourButtonsData="fourButtonsData1"></fourButton>
    <fourButton :fourButtonsData="fourButtonsData2"></fourButton>
    <Footers></Footers>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/searchHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import swipeBanner from '@/components/common/swipeBanner.vue'
  import fourButton from '@/components/button/fourButtons.vue'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        /*获取header头部*/
        searchHeaderData: {
          left: {
            name: "导购",
            link: "classify"
          },
          search: {
            name: "请输入要搜索的商品",
            link: "searchs"
          },
          /*是否调用qq客服*/
          qqs: {
            isShow: true
          },
          right: {
            name: "客服",
            link: "http://wpa.qq.com/msgrd?v=3&uin=2355650456&site=qq&menu=yes"
          }
        },
        /*banner的数据*/
        swipeData: [],
        /*获取按钮数据*/
        fourButtonsData1: [
          {
            name: "月月抽免单",
            src: "http://images.cheertea.com/img720_1.png",
            link: "freeday"
          },
          {
            name: "商圈",
            src: "http://images.cheertea.com/img720_2.png",
            link: "newshopnear"
          },
          {
            name: "海外购",
            src: "http://images.cheertea.com/img720_3.png",
            link: "oversea-purchase"
          },
          {
            name: "开店赢钻石",
            src: "http://images.cheertea.com/img720_4.png",
            link: "chouzhuanshi"
          }
        ],
        fourButtonsData2: [
          {
            name: "签到赢积分",
            src: "http://images.cheertea.com/img720_5.png",
            link: "addPoint"
          },
          {
            name: "视频直播",
            src: "http://images.cheertea.com/img720_6.png",
            link: "http://live.chanyou.net/app/index.php?i=2&c=entry&do=index&m=meepo_online"
          },
          {
            name: "养身馆",
            src: "http://images.cheertea.com/img720_7.png",
            link: "healthmuseum"
          },
          {
            name: "720砸金蛋",
            src: "http://images.cheertea.com/img720_8.png",
            link: "zajindan"
          }
        ]
      }
    },
    components: {
      Headers,
      Footers,
      swipeBanner,
      fourButton
    },
    created: function() {
      /*获取swipe数据*/
      this.HelloAxios();
    },
    methods: {
      /*获取swipe数据*/
      HelloAxios() {
        this.$http.get("index/index!getIndexData.do")
          .then(m => {
            console.log(m.data);

            //获取banner数据并设置
            this.swipeData = m.data.res_data.advList;
          })
          .catch(m => {
            console.log(m.data);
          });
      }
    },
//    computed: mapGetters(['title'])
  }
</script>
<style>
  #indexwrap {
    width: 100%;
  }
  .mint-swipe {
    height: 5rem;
  }
  .mint-swipe-indicators {
    bottom: .3rem;
  }
  .mint-swipe-indicator {
    opacity: 0.2;
  }
  .mint-swipe-indicator.is-active {
    background: #d82316;
    opacity: 1;
  }
  .mint-swipe-items-wrap img {
    width: 100%;
    height: 100%;
  }
  .mint-swipe-indicator {
    width: 12px;
    height: 12px;
  }
  /*设置图片*/
  .left {
    background: url(http://images.cheertea.com/sprites.png) -1.6rem -2.2rem no-repeat;
    background-size: 10rem 4.7rem;
  }
  .right {
    background: url(http://images.cheertea.com/sprites.png) -.03rem -2.08rem no-repeat;
    background-size: 10rem 4.7rem;
  }
</style>

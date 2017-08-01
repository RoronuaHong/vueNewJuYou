<template>
  <div id="indexwrap">
    <Headers :searchHeaderData="searchHeaderData"></Headers>
    <swipeBanner :swipeData="swipeData"></swipeBanner>
    <fourButton :fourButtonsData="fourButtonsData1" :addPoints="false"></fourButton>
    <fourButton :fourButtonsData="fourButtonsData2" :addPoints="true"></fourButton>
    <hotAnnouncement :hotAnnouncements="hotAnnouncements"></hotAnnouncement>
    <goodBanner :goodBanners="goodBanners[0]"></goodBanner>
    <threeGoods :getThreeAjaxData="beautyPreferredData"></threeGoods>
    <goodBanner :goodBanners="goodBanners[1]"></goodBanner>
    <threeGoods :getThreeAjaxData="clothesShoesData"></threeGoods>
    <commonTitle></commonTitle>
    <Footers></Footers>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/searchHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import swipeBanner from '@/components/common/swipeBanner.vue'
  import fourButton from '@/components/button/fourButtons.vue'
  import hotAnnouncement from '@/components/hotAnnouncement/hotannouncement.vue'
  import goodBanner from '@/components/title/goodBanner.vue'
  import threeGoods from '@/components/goods/threeGoods.vue'
  import commonTitle from '@/components/title/commonTitle.vue'
  import {mapGetters} from 'vuex'

  //导入组件
  import changeImgSrc from "@/assets/js/tools/changeImgSrc.js"

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
          },
        ],
        fourButtonsData2: [
          {
            name: "签到领积分",
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
        ],
        /*获取热点公告的信息*/
        hotAnnouncements: {
          title: "公告热点",
          name: "尊敬的家人您好，欢迎光临巨柚商城",
        },
        /*专题大图*/
        goodBanners: [
          /*美肤优选*/
          {
            src: "http://images.cheertea.com/cosmetics-banner.jpg",
            link: "cosmeticsGoodlist"
          },
          /*服装鞋帽*/
          {
            src: "http://images.cheertea.com/clothes-banner.jpg",
            link: "clothesGoodlist"
          }
        ],
        /*普通标题*/
        commonTitleData: [
          {
            name: "新品上市",
            link: ""
          },
          {
            name: "进口推荐",
            link: ""
          },
          {
            name: "爆款推荐",
            link: ""
          },
          {
            name: "十元专区",
            link: ""
          },
          {
            name: "绿积分专区",
            link: ""
          },
          {
            name: "巨省钱",
            link: ""
          },
          {
            name: "热门推荐",
            link: ""
          }
        ],
        /*美肤优选*/
        beautyPreferredData: [],
        /*衣服鞋帽*/
        clothesShoesData: []
      }
    },
    components: {
      Headers,
      Footers,
      swipeBanner,
      fourButton,
      hotAnnouncement,
      goodBanner,
      threeGoods,
      commonTitle
    },
    created() {
      /*获取swipe数据*/
      this.HelloAxios();

      /*美肤优选*/
      this.getTagAjax(73);

      /*衣服鞋帽*/
      this.getTagAjax(74);
    },
    methods: {
      /*获取swipe数据*/
      HelloAxios() {
        this.$http.get("index/index!getIndexData.do", { withCredentials: true })
          .then(m => {
            console.log(m.data);

            //获取数据并设置
            this.swipeData = m.data.res_data.advList;
          })
          .catch(m => {
            console.log(m.data);
          });
      },
      getTagAjax(tagId) {
        this.$http.get("goods!getGoodsListByTagId.do?tag_id=" + tagId, { withCredentials: true })
          .then(m => {
              console.log(m.data);

              var datas = [];

              //获取数据并设置
              datas = (m.data.res_data.goodsList).slice(0, 3);

              //将图片进行转换处理
              for(var item in datas) {
                datas[item]["image"] = window.changeImgSrc.changeFs(datas[item]["image"], "http://files.cheertea.com/statics");
              }

              /*美肤优选*/
              tagId === 73 && (this.beautyPreferredData = datas);

              /*衣服鞋帽*/
              tagId === 74 && (this.clothesShoesData = datas);
          })
          .catch(m => {
              console.log(m.data);
          })
      }
    },
//    computed: mapGetters(['title'])
  }
</script>
<style>
  #indexwrap {
    width: 100%;
    padding-bottom: 1.39rem;
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

<template>
  <div id="indexwrap">
    <Headers :searchHeaderData="searchHeaderData"></Headers>
    <swipeBanner :swipeData="swipeData" :dataSrcData="dataSrcData.src"></swipeBanner>
    <fourButton :fourButtonsData="fourButtonsData1" :addPoints="true" :dataSrcData="dataSrcData.src"></fourButton>
    <fourButton :fourButtonsData="fourButtonsData2" :addPoints="false" :dataSrcData="dataSrcData.src"></fourButton>
    <hotAnnouncement :hotAnnouncements="hotAnnouncements"></hotAnnouncement>
    <oneTwoButtons :oneTwoButtonsData="oneTwoButtonsData" :dataSrcData="dataSrcData.src"></oneTwoButtons>
    <twoBigButtons :twoBigButtonsData="twoBigButtonsData" :dataSrcData="dataSrcData.src"></twoBigButtons>
    <goodBanner :goodBanners="goodBanners[0]" :dataSrcData="dataSrcData.src"></goodBanner>
    <scrollThreeGoods :getThreeAjaxData="beautyPreferredData" hrefLink="abcd" :dataSrcData="dataSrcData.src"></scrollThreeGoods>
    <goodBanner :goodBanners="goodBanners[1]" :dataSrcData="dataSrcData.src"></goodBanner>
    <scrollThreeGoods :getThreeAjaxData="clothesShoesData" hrefLink="abc" :dataSrcData="dataSrcData.src"></scrollThreeGoods>
    <goodBanner :goodBanners="goodBanners[2]" :dataSrcData="dataSrcData.src"></goodBanner>
    <commonTitle :commonTitleData="commonTitleData[0]"></commonTitle>
    <threeGoods :getThreeAjaxData="newListingData" :dataSrcData="dataSrcData.src"></threeGoods>
    <commonTitle :commonTitleData="commonTitleData[1]"></commonTitle>
    <twoGoods :getTwoAjaxData="importRecommentData" :dataSrcData="dataSrcData.src"></twoGoods>
    <commonTitle :commonTitleData="commonTitleData[2]"></commonTitle>
    <twoGoods :getTwoAjaxData="hotRecommentData" :dataSrcData="dataSrcData.src"></twoGoods>
    <commonTitle :commonTitleData="commonTitleData[3]"></commonTitle>
    <threeGoods :getThreeAjaxData="tenRMBData" :dataSrcData="dataSrcData.src"></threeGoods>
    <commonTitle :commonTitleData="commonTitleData[4]"></commonTitle>
    <twoGoods :getTwoAjaxData="greenPointData" currency="绿" :dataSrcData="dataSrcData.src"></twoGoods>
    <commonTitle :commonTitleData="commonTitleData[5]"></commonTitle>
    <threeGoods :getThreeAjaxData="saveMoneyData" :dataSrcData="dataSrcData.src"></threeGoods>
    <commonTitle :commonTitleData="commonTitleData[6]"></commonTitle>
    <twoGoods :getTwoAjaxData="newHotRecommentData" :dataSrcData="dataSrcData.src"></twoGoods>
    <floatBox :floatBoxData="floatBoxData"></floatBox>
    <returnTop></returnTop>
    <Footers></Footers>
  </div>
</template>
<script>

  //导入组件
  import floatBox from '@/components/floatbox/floatBox'
  import Headers from '@/components/common/searchHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import swipeBanner from '@/components/common/swipeBanner.vue'
  import fourButton from '@/components/button/fourButtons.vue'
  import hotAnnouncement from '@/components/hotAnnouncement/hotannouncement.vue'
  import oneTwoButtons from '@/components/button/oneTwoButtons.vue'
  import twoBigButtons from '@/components/button/twoBigButtons.vue'
  import goodBanner from '@/components/title/goodBanner.vue'
  import threeGoods from '@/components/goods/threeGoods.vue'
  import commonTitle from '@/components/title/commonTitle.vue'
  import scrollThreeGoods from '@/components/goods/scrollThreeGoods.vue'
  import twoGoods from '@/components/goods/twoGoods.vue'
  import returnTop from '@/components/common/returnTop.vue'
  import {mapGetters} from 'vuex'

  //导入js组件
  import "@/assets/js/tools/changeImgSrc.js"

  export default {
    data() {
      return {
        /*延迟加载默认图片*/
        dataSrcData: {
          src: "http://images.cheertea.com/logobgs.png"
        },
        /*浮动框数据*/
        floatBoxData: {
          src: "http://images.cheertea.com/pk01.png",
          link: "asdsd"
        },
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
        /*获取按钮数据*/
        fourButtonsData1: [
          {
            name: "签到领积分",
            src: "http://images.cheertea.com/qd.png",
            link: "addPoint"
          },
          {
            name: "视频直播",
            src: "http://images.cheertea.com/sp.png",
            link: "http://live.chanyou.net/app/index.php?i=2&c=entry&do=index&m=meepo_online"
          },
          {
            name: "养身馆",
            src: "http://images.cheertea.com/ysg1.png",
            link: "healthmuseum"
          },
          {
            name: "720砸金蛋",
            src: "http://images.cheertea.com/md.png",
            link: "zajindan"
          }
        ],
        fourButtonsData2: [
          {
            name: "商圈",
            src: "http://images.cheertea.com/sq.png",
            link: "newshopnear"
          },
          {
            name: "海外购",
            src: "http://images.cheertea.com/hyg.png",
            link: "oversea-purchase"
          },
          {
            name: "开店赢钻石",
            src: "http://images.cheertea.com/pz.png",
            link: "chouzhuanshi"
          },
          {
            name: "月月抽免单",
            src: "http://images.cheertea.com/md.png",
            link: "freeorder"
          },
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
          },
          /*巨柚充值卡*/
          {
            src: "http://images.cheertea.com/juyou.png",
            link: "juYouCard"
          }
        ],
        /*专区大图按钮*/
        oneTwoButtonsData: {
          big: {
            src: "http://images.cheertea.com/newListing.png",
            link: "abc"
          },
          smallFirst: {
            src: "http://images.cheertea.com/hotRecomment.png",
            link: "dcx"
          },
          smallSecond: {
            src: "http://images.cheertea.com/saveMoney.png",
            link: "asdf"
          }
        },
        /*获取专区大图*/
        twoBigButtonsData: {
          left: {
            src: "http://images.cheertea.com/tenRMB.png",
            link: "abc1"
          },
          right: {
            src: "http://images.cheertea.com/greenPoint.png",
            link: "abc2"
          }
        },
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
        clothesShoesData: [],
        /*新品上市*/
        newListingData: [],
        /*爆款推荐*/
        hotRecommentData: [],
        /*进口推荐*/
        importRecommentData: [],
        /*十元专区*/
        tenRMBData: [],
        /*绿积分专区*/
        greenPointData: [],
        /*巨省钱*/
        saveMoneyData: [],
        /*热门推荐*/
        newHotRecommentData: []
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
      commonTitle,
      scrollThreeGoods,
      twoGoods,
      oneTwoButtons,
      twoBigButtons,
      floatBox,
      returnTop
    },
    created() {

      /*获取swipe数据*/
      this.HelloAxios();

      /*美肤优选*/
      this.getTagAjax(73, 9);

      /*衣服鞋帽*/
      this.getTagAjax(74, 9);

      /*新品上市*/
      this.getTagAjax(52, 15);

      /*爆款推荐*/
      this.getCommonAjax("hotRecommentData", 4);

      /*进口推荐*/
      this.getCommonAjax("importRecommentData", 4);

      /*热门推荐*/
      this.getCommonAjax("newHotRecommentData", 10);

      /*绿积分专区*/
      this.getCommonAjax("greenPointData", 10);

      /*十元专区*/
      this.getSpecialAjax("tenRMBData", 12, 6);

      /*巨省钱*/
      this.getCommonAjax("saveMoneyData", 9);
    },
    mounted() {
      //图片懒加载
      this.lazyLoad.init();
    },
    methods: {
      /*获取swipe数据*/
      HelloAxios() {
        this.$http.get("index/index!getIndexData.do", { withCredentials: true })
          .then(m => {
//            console.log(m.data);

            //获取数据并设置
            this.swipeData = m.data.res_data.advList;
          })
          .catch(m => {
//            console.log(m.data);
          });
      },
      /*获取tagId的商品*/
      getTagAjax(tagId, number) {
        this.$http.get("goods!getGoodsListByTagId.do?tag_id=" + tagId, { withCredentials: true })
          .then(m => {
//              console.log(m.data);

              var datas = [];

              //获取数据并设置
              if(typeof number === "number") {
                datas = (m.data.res_data.goodsList).slice(0, number);
              } else {
                datas = m.data.res_data.goodsList;
              }

              //将图片进行转换处理
              for(var item in datas) {
                datas[item]["image"] = changeImgSrc.changeFs(datas[item]["image"], "http://files.cheertea.com/statics");
              }

              /*美肤优选*/
              tagId === 73 && (this.beautyPreferredData = datas);

              /*衣服鞋帽*/
              tagId === 74 && (this.clothesShoesData = datas);

              /*衣服鞋帽*/
              tagId === 52 && (this.newListingData = datas);
          })
          .catch(m => {
//              console.log(m.data);
          });
      },
      /*获取specialId商品*/
      getSpecialAjax(types, acids, number) {
        this.$http.get("goods!getGoodsListByActivityId.do?activity_id=" + acids, { withCredentials: true })
          .then(m => {
//              console.log(m.data);

            //获取数据
            var datas = [];

            if(typeof number === "number") {
              datas = (m.data.res_data.goodsList).slice(0, number);
            } else {
              datas = m.data.res_data.goodsList;
            }

            //将图片进行转换处理
            for(var item in datas) {
              datas[item]["image"] = window.changeImgSrc.changeFs(datas[item]["original"], "http://files.cheertea.com/statics");
            }

            //十元专区
            types === "tenRMBData" && (this.tenRMBData = datas);

          })
          .catch(m => {
//              console.log(m.data);
          })
      },
      /*获取普通商品*/
      getCommonAjax(types, number) {
        this.$http.get("index/index!getIndexData.do", { withCredentials: true })
          .then(m => {
//            console.log(m.data);

            var datas = [];

            //爆款推荐
            types === "hotRecommentData" && (datas = (m.data.res_data.bktjgoodsList).slice(0, number));

            //进口推荐
            types === "importRecommentData" && (datas = (m.data.res_data.czlfgoodsList).slice(0, number));

            //绿积分专区
            types === "greenPointData" && (datas = (m.data.res_data.greenSectionGoodsList).slice(0, number));

            //巨省钱
            types === "saveMoneyData" && (datas = (m.data.res_data.specialGoodsList).slice(0, number));

            //热门推荐
            types === "newHotRecommentData" && (datas = (m.data.res_data.HotGoodsList).slice(0, number));

            for(var item in datas) {
              datas[item]["image"] = typeof datas[item]["image"] === "string" ? window.changeImgSrc.changeFs(datas[item]["image"], "http://files.cheertea.com/statics") : window.changeImgSrc.changeFs(datas[item]["original"], "http://files.cheertea.com/statics");
            }

            //爆款推荐
            types === "hotRecommentData" && (this.hotRecommentData = datas);

            //进口推荐
            types === "importRecommentData" && (this.importRecommentData = datas);

            //绿积分专区
            types === "greenPointData" && (this.greenPointData = datas);

            //巨省钱
            types === "saveMoneyData" && (this.saveMoneyData = datas);

            //巨省钱
            types === "newHotRecommentData" && (this.newHotRecommentData = datas);
          })
          .catch(m => {
//             console.log(m.data);
          });
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

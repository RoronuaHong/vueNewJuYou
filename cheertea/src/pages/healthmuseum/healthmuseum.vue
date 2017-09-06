<template>
  <div id="healthmuseum">
    <Headers></Headers>
    <img src="http://images.cheertea.com/greenbeans_002.jpg" alt="" class="banner">
    <div class="head">
      <img class="fly1" src="http://images.cheertea.com/fly1.png" alt="">
      <span class="new same">新品上架</span>
      <img class="fly2" src="http://images.cheertea.com/fly2.png" alt="">
    </div>
    <threeGoods :getThreeAjaxData="newData" :dataSrcData="dataSrcData.src"></threeGoods>
    <div class="head">
      <img class="fly1" src="http://images.cheertea.com/fly3.png" alt="">
      <span class="hot same">热卖推荐</span>
      <img class="fly2" src="http://images.cheertea.com/fly4.png" alt="">
    </div>
    <threeGoods :getThreeAjaxData="hotData" :dataSrcData="dataSrcData.src"></threeGoods>
    <div class="head">
      <img class="fly1" src="http://images.cheertea.com/fly7.png" alt="">
      <span class="fruit same">全部商品</span>
      <img class="fly2" src="http://images.cheertea.com/fly8.png" alt="">
    </div>
    <threeGoods :getThreeAjaxData="allData" :dataSrcData="dataSrcData.src"></threeGoods>
    <footers></footers>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import threeGoods from '@/components/goods/threeGoods.vue'

  //导入js组件
  import "@/assets/js/tools/changeImgSrc.js"

  export default {
    data() {
      return {
        /*延迟加载默认图片*/
        dataSrcData: {
          src: "http://images.cheertea.com/logobgs.png"
        },
        newData: [],
        hotData: [],
        allData: []
      }
    },
    components: {
      Headers,
      Footers,
      threeGoods
    },
    created() {

      //获取新品上架商品的数据
      this.getTagData(65);

      //获取热门商品的数据
      this.getTagData(66);

      //获取全部商品的数据
      this.getGoodData(765);
    },
    mounted() {
      //图片懒加载
      this.lazyLoad.init();
    },
    methods: {
      getTagData(tagId) {
        this.$http.get("goods!getGoodsListByTagId.do?tag_id=" + tagId, {
          withCredentials: true
        })
          .then(m => {
            console.log(m);

            //将图片进行转换处理
            var datass = [];
            datass = m.data.res_data.goodsList;
            for(var item in datass) {
              datass[item]["image"] = changeImgSrc.changeFs(datass[item]["image"], "http://files.cheertea.com/statics");
            }

            if(m.data.res_code == 1) {
              (tagId == 65) && (this.newData = datass);
              (tagId == 66) && (this.hotData = datass);
            }
          })
          .catch(m => {
            console.log(m);
          });
      },
      getGoodData(carId) {
        this.$http.get("getGoodsListByCatId.action?id=" + carId, {
          withCredentials: true
        })
          .then(m => {
            console.log(m);

            //将图片进行转换处理
            var datas = [];
            datas = m.data.res_data.goodsList;
            for(var item in datas) {
              datas[item]["image"] = changeImgSrc.changeFs(datas[item]["image"], "http://files.cheertea.com/statics");
            }

            this.allData = datas;
          })
          .catch(m => {
            console.log(m);
          });
      }
    }
  }
</script>
<style>
  .banner {
    padding-top: 105px;
    height: 5rem;
    background-size: 100% 100%;
  }
  .head {
    height: 1.03125rem;
    border-bottom: .015625rem solid #d9d9d9;
  }
  .fly1, .fly2 {
    float: left;
    width: 35%;
    height: .4375rem;
    margin-top: .3125rem;
  }
  .fly1 {
    margin-left: 5%;
  }
  .fly2 {
    float: right;
    margin-right: 5%;
  }
  .same {
    float: left;
    margin-left: 3%;
    margin-top: .3125rem;
    font-size: .375rem;
  }
  .new {
    color: #008aff;
  }
  .hot {
    color: #fe0000;
  }
  .fruit {
    color: #ff6bdf;
  }
</style>

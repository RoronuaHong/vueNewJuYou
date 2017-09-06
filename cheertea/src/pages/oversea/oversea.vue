<template>
  <div id="oversea">
      <router-link :to="taiWandata.link">
        <img :src="dataSrcData.src" :data-src="taiWandata.img" alt="" class="banners">
      </router-link>
      <threeGoods :getThreeAjaxData="taiWandata.datas" :dataSrcData="dataSrcData.src"></threeGoods>
      <router-link :to="Canadadata.link">
        <img :src="dataSrcData.src" :data-src="Canadadata.img" alt="" class="banners">
      </router-link>
      <threeGoods :getThreeAjaxData="Canadadata.datas" :dataSrcData="dataSrcData.src"></threeGoods>
  </div>
</template>
<script>
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
        /*台湾馆*/
        taiWandata: {
          link: 'market_detail_63',
          img: 'http://images.cheertea.com/banner1_002.jpg',
          datas: []
        },
        /*加拿大馆*/
        Canadadata: {
          link: 'canadianpavilion.html',
          img: 'http://images.cheertea.com/banner1_004.jpg',
          datas: []
        }
      }
    },
    components: {
      Headers,
      threeGoods
    },
    created() {

      /*获取台湾馆的数据*/
      this.getAjax(72);

      /*获取加拿大馆的数据*/
      this.getAjax(71);
    },
    mounted() {
      //图片懒加载
      this.lazyLoad.init();
    },
    methods: {
      getAjax(tagId) {
        this.$http.get("goods!getGoodsListByTagId.do?tag_id=" + tagId,{
            withCredentials: true
        })
          .then(m => {
//            console.log(m.data);

            //将数量控制在6个
            for(var i = 0; i < 6; i++) {
              this.taiWandata.datas.push(m.data.res_data.goodsList[i]);
            }

            for(var i = 0; i < m.data.res_data.goodsList.length; i++) {
              this.taiWandata.datas.src = "product_info.html?goods_id=" + m.data.res_data.goodsList[i].goods_id;
            }

            //将图片进行转换处理
            var datass = [];
            datass = m.data.res_data.goodsList;
            for(var item in datass) {
              datass[item]["image"] = changeImgSrc.changeFs(datass[item]["image"], "http://files.cheertea.com/statics");
            }

            console.log(this.taiWandata);
          })
          .catch(m => {
            console.log(m.data);
        });
      }
    }
  }
</script>
<style>
  .bigbox {
    width: 100%;
  }
  .banners {
    display: block;
    width: 100%;
    height: 5rem;
  }
</style>

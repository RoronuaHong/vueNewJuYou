<template>
    <div id="classify">
      <Headers></Headers>
      <div class="box">
        <leftTab :leftTabData="leftTabData" :changeLi="changeLi"></leftTab>
        <rightCon :rightConData="rightConData" :defaultImg="defaultImg.src"></rightCon>
      </div>
      <footers></footers>
    </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import leftTab from '@/components/leftTab/leftTab.vue'
  import rightCon from '@/components/rightCon/rightCon.vue'

  //导入js组件
  import "@/assets/js/tools/changeImgSrc.js"

  //导入store
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        /*默认图片*/
        defaultImg: {
          src: "http://images.cheertea.com/logobgs.png"
        },
        /*获取左边tab的数据*/
        leftTabData: [],
        /*获取右边con的数据*/
        rightConData: []
      }
    },
    components: {
      Headers,
      Footers,
      leftTab,
      rightCon
    },
    created() {
      /*获取lefttab的数据, 之后获取rightCon的数据*/
      this.getLeftTabData(0);
    },
    mounted() {
      //设置初始时的内容的高度
      this.getBoxHeight(75);
    },
    methods: {
      /*设置初始时的内容的高度*/
      getBoxHeight(num) {
        //获取屏幕高度
        var h = window.screen.height;
        var head = document.querySelector('.mint-header');
        var foot = document.querySelector('.mint-tabbar');
        var con = document.querySelector('.box');
        var lefttabs = document.querySelector('.lefttabbox');
        var rightconbox = document.querySelector('.rightconbox');

        h = h - head.offsetHeight - foot.offsetHeight;
        con.style.height = h + "px";
        lefttabs.style.height = h + "px";
        rightconbox.style.height = h + "px";
      },
      /*获取tab数据*/
      getLeftTabData(indexs) {
        this.$http.get("widget?type=product_category&ajax=yes&action=getCatPageData", { withCredentials: true})
          .then(m => {
//            console.log(m.data);
            this.leftTabData = m.data;

            this.leftTabData.catList[indexs].sel = true;

            //获取右边的数据
            this.getConData(this.leftTabData.catList[indexs].cat_id);
          })
          .catch(m => {
            console.log(m);
          });
      },
      /*获取右边的数据*/
      getConData(ids) {
        this.$http.get("widget?type=product_category&ajax=yes&action=getCatData&cat_id=" + ids, { withCredentials: true })
          .then(m => {
//            console.log(m.data);
            this.rightConData = m.data;

            //将第三级分类加入
            for(var j = 0; j < this.rightConData.children.length; j++) {
              this.rightConData.children[j]["childrenList"] = [];
              for(var i = 0; i < this.rightConData.childrenLists.length; i++) {
                if(this.rightConData.children[j].cat_id == this.rightConData.childrenLists[i].parent_id) {
                  this.rightConData.childrenLists[i].image = changeImgSrc.changeFs(this.rightConData.childrenLists[i].image, "http://files.cheertea.com/statics");

                  //如果为空则不添加
                  if(!!this.rightConData.childrenLists[i]) {
                    this.rightConData.children[j]["childrenList"].push(this.rightConData.childrenLists[i]);
                  }
                }
              }
            }
          })
          .catch(m => {
            console.log(m.data);
          });
      },
      /*进行tab切换*/
      changeLi(indexs) {
        this.getLeftTabData(indexs);
//        console.log(this.leftTabData.catList[indexs]);
        this.getConData(this.leftTabData.catList[indexs].cat_id);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .box {
    overflow: hidden;
    width: 100%;
    padding: 105px 0 1.12rem;
    -webkit-overflow-scrolling: touch;
  }
</style>

<template>
  <div id="indexwrap">
    <Headers></Headers>
    <swipeBanner :swipeData="swipeData"></swipeBanner>
    <Footers></Footers>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/searchHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import swipeBanner from '@/components/common/swipeBanner.vue'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        /*获取header头部*/
        headerData: {},
        /*banner的数据*/
        swipeData: []
      }
    },
    components: {
      Headers,
      Footers,
      swipeBanner
    },
    created: function() {
      this.HelloAxios();
    },
    methods: {
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
</style>

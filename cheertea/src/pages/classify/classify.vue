<template>
    <div id="classify">
      <Headers></Headers>
      <footers></footers>
    </div>
</template>

<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'

  //导入store
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
//        headerData: {
//          name: "分类"
//        }
      }
    },
    components: {
      Headers,
      Footers
    }
  }
</script>
<!-- 样式代码 -->
<style>

</style>

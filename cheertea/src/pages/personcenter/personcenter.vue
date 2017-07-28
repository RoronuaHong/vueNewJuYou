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

  export default {
    data() {
      return {
//        footerData: {
//            active: "home"
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

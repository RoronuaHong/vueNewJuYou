<template>
  <div id="personcenter">
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

      }
    },
    components: {
      Headers,
      Footers
    }
  }
</script>
<style>

</style>

<template>
  <div id="leftTab">
    <div class="lefttabbox">
      <ul class="lefttab" id="lefttabs">
        <li
          v-for="(item, index) in leftTabData.catList"
          :key="item.cat_id"
          :ids="item.cat_id"
          :class="{lisel: item.sel}"
          @click="changeLi(index)"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['leftTabData', 'changeLi']
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .lefttabbox {
    position: fixed;
    overflow: auto;
    left: 0;
    width: 20%;
    -webkit-overflow-scrolling: touch;
  }
  .lefttab {
    float: left;
    width: 100%;
    background: #f7f7f7;
    li {
      width: 100%;
      min-height: 70px;
      line-height: 70px;
      font-size: .36rem;
      border-bottom: 1px solid #ccc;
      text-align: center;
      color: #1a1a1a;
      box-shadow: 1px 0 0 #ccc;
    }
    .lisel {
      width: 97%;
      border-left: 5px solid #e94c1a;
      background: #fff;
    }
  }
</style>

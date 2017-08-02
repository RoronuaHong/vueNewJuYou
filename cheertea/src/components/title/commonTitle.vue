<template>
  <div id="indextitle">
    <router-link :to="commonTitleData.link">
      <div class="innertitle clearfix">
        <span></span>
        <strong>{{ commonTitleData.name }}</strong>
        <span></span>
      </div>
      <span class="moresome">更多 &gt;</span>
    </router-link>
  </div>
</template>
<script>
    export default {
      data() {
        return {

        }
      },
      props: ['commonTitleData']
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #indextitle {
    position: relative;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-top: .19rem solid #e9e3e3;
    background: #fff;
    background-size: 100%;
    .innertitle {
      height: 100%;
      margin: 0 auto;
      text-align: center;
      span {
        display: inline-block;
        width: .55rem;
        height: 100%;
        background: url(http://images.cheertea.com/titlehengxian.png) no-repeat;
        background-size: cover;
      }
      strong {
        position: relative;
        top: -.35rem;
        display: inline-block;
        height: 100%;
        padding: 0 .19rem;
        font-size: .38rem;
        font-weight: 700;
        color: #000;
      }
    }
  }
  .moresome {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: .5rem;
    font-size: .25rem;
    text-align: center;
    color: #000;
  }

</style>

<template>
  <div id="goodBanner">
    <div class="cosmetics-zone newwrap-zone">
      <div class="newwrap-zone-banner">
        <router-link :to="goodBanners.link">
          <img :src="dataSrcData" :data-src="goodBanners.src" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {

        }
      },
      props: ['goodBanners', 'dataSrcData']
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .newwrap-zone-banner {
    position: relative;
    width: 100%;
    height: 5rem;
    border-top: 15px solid #e9e3e3;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

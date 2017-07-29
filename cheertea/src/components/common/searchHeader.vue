<template>
  <header class="clearfix">
    <router-link to="classify" class="left">{{searchHeaderData.left.name}}</router-link>
    <router-link to="searchs" class="search">
      {{searchHeaderData.search.name}}
      <div class="searchbg"></div>
    </router-link>
    <a v-if="searchHeaderData.qqs.isShow" :href="searchHeaderData.right.link" class="right">{{searchHeaderData.right.name}}</a>
    <router-link v-if="!searchHeaderData.qqs.isShow" :to="searchHeaderData.right.link" class="right">{{searchHeaderData.right.name}}</router-link>
  </header>
</template>
<script>

  //引入scss
  import "@/assets/css/components/searchHeader.scss"

  export default {
    data() {
      return {

      }
    },
    props: ['searchHeaderData']
  }
</script>

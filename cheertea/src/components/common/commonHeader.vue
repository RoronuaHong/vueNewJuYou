<template>
  <mt-header fixed :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
        return {

        }
    },
    computed: {
        title() {
          return this.$store.state.commonHeader.title[this.$route.name]
        }
    }
  }
</script>
<style>
  .mint-header {
    height: 1.34rem;
  }
  .mint-button {
    height: 1.34rem;
  }
  .mintui {
    font-size: .5rem;
  }
  .mint-header-title {
    font-size: 40px;
  }
</style>

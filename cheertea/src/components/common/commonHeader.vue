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
  .mint-button {
    height: 1.34rem;
  }
</style>

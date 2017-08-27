<template>
  <div id="ids">
    <h3>Welcome To Me</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击+" @click="addOdd">
    <input type="button" value="点击异步" @click="addAsync">
    <div>
      现在的数字为: {{count}}, 它现在是.
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    data() {
      return {

      }
    },
//    computed: mapGetters([
//      'count',
//      'getOdd'
//    ]),
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: mapActions([
      'increment',
      'decrement',
      'addOdd',
      'addAsync'
    ])
  }
</script>
<style>

</style>

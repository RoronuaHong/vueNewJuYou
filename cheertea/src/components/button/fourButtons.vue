<template>
  <ul class="content clearfix">
    <li v-for="item in fourButtonsData">
      <router-link :to="item.link">
          <img :data-src="item.src" :src="dataSrcData" alt="">
          <span>{{item.name}}</span>
      </router-link>
    </li>
    <div class="addPoint" @click="addPoint" v-if="addPoints"></div>
    <a href="http://live.chanyou.net/app/index.php?i=2&c=entry&do=index&m=meepo_online" class="video" v-if="addVideo"></a>
  </ul>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['fourButtonsData', 'addPoints', 'dataSrcData', 'addVideo'],
    methods: {
      addPoint() {
        this.$http.get('member/login!addGreenPoint.do', { withCredentials: true })
          .then(m => {
//            console.log(m.data);
            Toast(m.data.res_info);

            //会员未登录则直接跳转到登录页面
            m.data.res_code == 0 && this.$router.push({ path: 'login', query: {forward: 'index'}});

            //未关注则直接跳转到需要关注二维码页面
            m.data.res_code == 2 && this.$router.push('focusqrcode');
        })
      }
    }
  }
</script>
<style>
  .video {
    position: absolute;
    top: 0;
    left: 25%;
    display: inline-block;
    width: 25%;
    height: 2.3rem;
  }
  .content {
    position: relative;
    top: 0;
    width: 100%;
    height: 2.3rem;
  }
  .content li {
    float: left;
    width: 25%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .content img {
    display: block;
    width: 1.14rem;
    height: 1.14rem;
    margin: .2rem auto 0;
    vertical-align: middle;
    border-radius: 50%;
  }
  .content span {
    display: block;
    width: 100%;
    padding-top: .2rem;
    font-size: .34rem;
    text-align: center;
    color: #6a6a6a;
  }
  .addPoint {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 25%;
    height: 2.3rem;
  }
</style>

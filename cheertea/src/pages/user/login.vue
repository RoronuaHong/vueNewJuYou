<template>
  <div id="login">
    <div class="loginwrap">
      <Headers></Headers>
      <div class="logo">
        <img :src="imgs" alt="">
      </div>
      <mt-field placeholder="请输入手机号/邮箱" :state="states" :model="uname"></mt-field>
      <mt-field placeholder="请输入密码" :state="states" type="password" :model="passwords"></mt-field>
      <p class="meri"></p>
      <mt-button type="danger" size="large">登录</mt-button>
      <Footers></Footers>
    </div>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'

  export default {
    data() {
      return {
        uname: "",
        passwords: "",
        states: "",
        meriData: "",
        imgs: "http://images.cheertea.com/logonew2.png"
      }
    },
    components: {
      Headers,
      Footers
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .loginwrap {
    width: 70%;
    padding-top: 2rem;
    margin: 0 auto;
  }
  .logo {
    width: 60%;
    height: 180px;
    margin: 0 auto 50px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .mint-cell {
    width: 100%;
    height: 86px;
    margin-bottom: 30px;
    line-height: 86px;
    border: 2px solid #ddd;
    font-size: 20px !important;
    border-radius: 8px;
  }
  .mint-button {
    margin-top: 30px;
    height: 86px !important;
    line-height: 86px !important;
    font-size: 40px;
    border-radius: 50px;
  }
  .meri {
    width: 100%;
    height: 86px;
    line-height: 86px;
    font-size: 30px;
    color: #ef4f4f;
  }
</style>

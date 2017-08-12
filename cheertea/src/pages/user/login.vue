<template>
  <div id="login">
    <div class="loginwrap">
      <Headers></Headers>
      <div class="logo">
        <img :src="imgs" alt="">
      </div>
      <el-form :model="userValidateForm" :rules="userRule" ref="userValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item prop="uname">
          <el-input type="uname" placeholder="请输入用户名/邮箱" v-model="userValidateForm.uname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" placeholder="请输入密码" v-model="userValidateForm.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <p class="meri">{{ msg }}</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userValidateForm')">提 交</el-button>
        </el-form-item>
      </el-form>
      <div class="wxloginbtn" @click="wxloginbtns">微信登录</div>
      <Footers></Footers>
    </div>
  </div>
</template>
<script>

  //导入组件
  import Headers from '@/components/common/commonHeader.vue'
  import Footers from '@/components/common/commonFooter.vue'
  import { Form, FormItem ,Input, Button } from 'element-ui'
  import Vue from 'vue'

  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(Button);

  export default {
    data() {
      /*验证用户名*/
      const unameCheck = (rule, value, callback) => {
        /*手机号正则*/
        const telVeg = /^1[34578]\d{9}$/gi;
        const emailVeg = /^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4}){1,2}$/gi;

        //空值验证
        !value && callback(new Error("请输入手机号/邮箱"));

        //验证正则
        !(value.match(telVeg) || value.match(emailVeg)) && callback(new Error("请输入正确的手机号/邮箱"));

        callback();
      }

      /*验证密码*/
      const pwdCheck = (rule, value, callback) => {
        /*密码长度6-16位*/
        const pwdVeg = /^\w{6,16}$/gi;

        //空值验证
        !value && callback(new Error("请输入密码"));

        //验证正则
        !(value.match(pwdVeg)) && callback(new Error("请输入6-16位的密码"));

        callback();
      }

      return {
        /*logo图*/
        imgs: "http://images.cheertea.com/logonew2.png",
        userValidateForm: {
          uname: '',
          pwd: ''
        },
        msg: '',
        userRule: {
          uname: [
            {
              validator: unameCheck,
              trigger: 'blur, change'
            }
          ],
          pwd: [
            {
              validator: pwdCheck,
              trigger: 'blur, change'
            }
          ]
        }
      }
    },
    components: {
      Headers,
      Footers
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            //传递axios
            this.$http.get("member/login!login.do?", {
              withCredentials: true,
              params: {
                username: this.userValidateForm.uname,
                password: this.userValidateForm.pwd
              }
            })
              .then(m => {
//                console.log(m.data);

                if(m.data.res_code == 0) {
                  this.msg = m.data.res_info;
                } else {
                  this.msg = " ";
                }

                !!(m.data.res_code == 1) && this.$router.push("personcenter");
              })
              .catch(m => {
//                console.log(m.data);
              });
          } else {
            return false;
          }
        });
      },
      wxloginbtns() {
        /*获取要跳转的页面参数*/
//        const string = getQueryString.init("forward") || "login.html";
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  /*cdn*/
  $imgurl: "http://images.cheertea.com/";

  /*本地*/
  //$imgurl: "../images/";
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
  /*使用ElementUI实现样式*/
  .el-form-item {
    height: 86px !important;
    line-height: 86px !important;
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-input {
    height: 86px;
    line-height: 86px;
  }
  .el-input__inner {
    height: 100%;
    font-size: 30px;
    border: 2px solid #ccc;
    border-radius: 20px;
  }
  .el-button {
    width: 100%;
    font-size: 40px;
    border-radius: 40px;
  }
  .el-form-item {
    margin-bottom: 55px;
  }
  .el-form-item__error {
    padding-top: 15px;
    font-size: 30px;
  }
  .el-button--primary {
    height: 86px;
    line-height: 50px;
    margin-top: 30px;
  }
  .meri {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    text-align: center;
    color: #f00;
  }
  .wxloginbtn {
    width: 40%;
    height: 2.97rem;
    line-height: 400px;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
    background: url($imgurl + "wechatloginbg.png") 0 0 no-repeat;
    background-size: contain;
    color: #1a1a1a;
  }
</style>

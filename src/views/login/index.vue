<template lang="html">
  <div class="login-container slideshow">
    <div class="slideshow-image"></div>
	  <div class="slideshow-image"></div>
    <h1 class="login-logo">塞北游</h1>
    <div class="login-form-wrap">
      <h2 class="login-title">塞北游顾问平台登录</h2>
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" 
      ref="loginForm" label-position="left" label-width="0px">
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="请输入密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
const validateUsername = (rule, value, callback) => {
  if(!value){
    callback(new Error("用户名不能为空"));
  }else if (!isvalidUsername(value)) {
    callback(new Error("请输入正确的6-12位用户名，由字母，数字及下划线组成"));
  } else {
    callback();
  }
};
const validatePass = (rule, value, callback) => {
  if(!value){
    callback(new Error("密码不能为空"))
  }
  if (value.length < 5) {
    callback(new Error("密码不能小于6位"));
  } else {
    //callback();
    callback(new Error("用户名或者密码错误"));
  }
};
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      pwdType: "password"
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 登录按钮loading状态
          this.$store.commit('SET_LOGINBTNLOADING',true)
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.$store.commit('SET_LOGINBTNLOADING',false)
            });
        } else {
          return false;
        }
      });
    }
  },
  computed: {
    loading(){
      return this.$store.state.user.longinBtnloading
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.slideshow {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 20s;
  opacity: 1;
  transform: scale(1.2);
}
.slideshow-image:nth-child(1) {
  background-image: url(../../assets/indexbj1.jpg);
  animation-name: kenburns-1;
  z-index: 2;
}
.slideshow-image:nth-child(2) {
  background-image: url(../../assets/indexbj2.jpg);
  animation-name: kenburns-2;
  z-index: 1;
}
@keyframes kenburns-1 {
  0% {
    opacity: 1;
    transform: scale(1.2);
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale(1);
  }
  90% {
    opacity: 0;
    transform: scale(1.2285);
  }
  100% {
    opacity: 1;
  }
}
@keyframes kenburns-2 {
  40% {
    opacity: 0;
    transform: scale(1.2);
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
.login-logo {
  height: 5%;
  width: 100%;
  font-size: 0px;
  position: absolute;
  left: 5%;
  top:5%;
  z-index: 3;
}
.login-form-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  z-index: 3;
  padding: 20px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}
.login-title{
  text-align: center;
  color: $menuBg;
  height: 40px;
  font-size: 30px;
  margin-bottom: 15px;
}
.el-input {
  display: inline-block;
  height: 40px;
  width: 85%;
}
.svg-container {
  padding: 6px 5px 6px 15px;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
  &_login {
    font-size: 20px;
  }
}
.el-form-item {
  background: #fff;
  border-radius: 5px;
  color: #454545;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.thirdparty-button {
  position: absolute;
  right: 35px;
  bottom: 28px;
}
</style>

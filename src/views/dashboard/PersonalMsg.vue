<template>
  <div class="personal-msg-wrap">
    <img :src="avatar" alt="" width="50px" class="personal-avatar">
    <div class="personal-msg">
      <p class="personal-msg-name">{{name}}<el-tag type="warning" size="mini" class="personal-msg-tag">主任医生</el-tag></p>
      <p class="personal-msg-more">擅长专业:<span>{{specialty}}</span></p>
      <p class="personal-msg-more">所在诊所:<span>{{location}}</span></p>
      <router-link to="/personal" class="personal-msg-modifier">修改个人信息</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "personalMsg",
  data() {
    return {
      specialty:'正畸',
      location:'瑞泰北苑'
    };
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ]),
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .personal-msg-wrap {
    margin: 20px 80px;
    height: 160px;
    border: 1px solid $mainBdColor;
    border-radius: 5px;
    padding: 20px;
    .personal-avatar{
      float: left;
      border-radius: 50%;
      margin-top: 35px;
    }
    .personal-msg{
      line-height: 1;
      overflow: hidden;
      padding-left: 20px;
      color:$mainTextColor;
      .personal-msg-name{ 
        font-weight: 600;
        font-size: 18px;
        margin: 0px;
        line-height: 40px;
        .personal-msg-tag{
          margin-left: 20px;
          vertical-align: 1px;
        }
      }
      .personal-msg-more{
        line-height: 20px;
          span{
            margin-left: 5px;
          }
      }
      .personal-msg-modifier{
        display: inline-block;
        margin-top: 20px;
        color: #509ad9;
      }
    }
  }
</style>

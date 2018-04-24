<template>
  <el-dropdown  trigger="hover" size="small">
    <div class="avatar-wrapper">
      <img class="user-avatar" :src="avatar">
      <span class="user-name">{{name}}<i class="el-icon-caret-bottom"></i></span>
    </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
      <router-link  to="/">
        <el-dropdown-item>
          <span><svg-icon icon-class="index" class="icon"/>返回主页</span>
        </el-dropdown-item>
      </router-link>
      <!-- 注意此处加点击事件加载element组件上 -->
      <el-dropdown-item divided @click.native="logout">
        <span><svg-icon icon-class="logout" class="icon"/>退出</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {
  props:{
    avatar:{
      type:String
    },
    name:{
      type:String
    }
  },
  methods: {
    // 前端登出
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload()  // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar-wrapper {
  cursor: pointer;
  // height: 50px;
  line-height: 50px;
  font-size: 0px;
  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .user-name{
    font-size: 14px;
    font-weight: 500;
    vertical-align: top;
    padding-left: 15px;
    i{
      vertical-align: -4px;
    }
  }
}
.user-dropdown .icon{
  margin-right: 10px;
}
</style>

<template>
  <el-dropdown  trigger="hover" size="small">
    <div class="message-tooltip-wrapper">
      <!-- Badge 标记 -->
      <el-badge :value="20" :max="10" class="item">
        <span class="badge-wrap"><svg-icon icon-class="message" class="icon"/></span>
      </el-badge>
      <span class="user-name">通知<i class="el-icon-caret-bottom"></i></span>
    </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
      <router-link  to="/">
        <el-dropdown-item>
          <span><svg-icon icon-class="index" class="icon"/>会诊消息</span>
        </el-dropdown-item>
      </router-link>
      <!-- 注意此处加点击事件加载element组件上 -->
      <el-dropdown-item divided @click.native="logout">
        <span><svg-icon icon-class="logout" class="icon" />通知消息</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {
  props:{
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.message-tooltip-wrapper{
  cursor: pointer;
  margin-top: 8px;
  .badge-wrap{
    display: inline-block;
    width: 35px;
    line-height:35px;
    background: #8997e2;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
  }
  .user-name{
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
    padding-left: 15px;
  }
}
.user-dropdown .icon{
  margin-right: 10px;
}
</style>

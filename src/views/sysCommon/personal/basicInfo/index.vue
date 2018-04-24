<template>
    <table class="base-info">
      <tr>
        <th colspan="4"> <svg-icon icon-class="basicInfo" class="basic-info-icon"></svg-icon>基本信息</th>
      </tr>
      <tr>
        <td>姓名:</td>
        <td>武俊</td>
        <td>性别:</td>
        <td>男</td>
      </tr>
      <tr>
        <td>年龄:</td>
        <td>40岁</td>
        <td>手机号:</td>
        <td>186122228833</td>
      </tr>
      <tr>
        <td>ID:</td>
        <td>12345678</td>
        <td>邮箱:</td>
        <td>123456@126.com</td>
      </tr>
      <tr>
        <td>所在诊所:</td>
        <td>凯德诊所</td>
        <td>职位:</td>
        <td>瑞尔集团医疗质量总监</td>
      </tr>
      <tr>
        <td>出诊时间:</td>
        <td>周二、周三、周五、周六上午</td>
        <td>资历年限:</td>
        <td>15年</td>
      </tr>
      <tr>
        <td>擅长专业:</td>
        <td colspan="3"> 
          <el-tag size="mini" v-for="(item, index) in goodMajor" 
          class="good-major-tag"
          :key="index">{{item}}</el-tag> 
        </td>
      </tr>
    </table>
</template>

<script>
export default {
  name: "basicInfo",
  data() {
    return {
      goodMajor:['微创美学修复','全口整体治疗方案设计','正畸','牙周治疗','牙齿美容']
    };
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.base-info{
  padding: 30px;
  width: 100%;
  th{
    padding: 0;
    text-align: left;
    vertical-align: top;
    font-size: 20px;

  }
  tr{
    height: 35px;
    td:nth-child(2n+1){
      width: 180px;
      font-weight: 600;
      padding-left: 75px;
    }
  }
  .basic-info-icon{
    font-size:50px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .good-major-tag{
    margin-right: 10px;
  }
}
</style>

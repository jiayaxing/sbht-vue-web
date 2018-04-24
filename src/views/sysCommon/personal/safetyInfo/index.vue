<template>
    <table class="safety-info">
      <tr>
        <th colspan="3"> <svg-icon icon-class="safetyInfo" class="safety-info-icon"></svg-icon>安全设置</th>
      </tr>
      <tr>
        <td>手机绑定:</td>
        <td>13855556666</td>
        <td><span>修改手机</span></td>
      </tr>
      <tr>
        <td>邮箱绑定:</td>
        <td>123456789@qq.com</td>
        <td>修改邮箱</td>
      </tr>
      <tr>
        <td>当前账号:</td>
        <td>taiyiyun123</td>
        <td>修改密码</td>
      </tr>
    </table>
</template>

<script>
export default {
  name: "basicInfo",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.safety-info {
  padding: 30px;
  width: 100%;
  th {
    height: 55px;
    text-align: left;
    vertical-align: top;
    font-size: 20px;
  }
  tr {
    height: 35px;
    td:first-child {
      width: 180px;
      font-weight: 600;
      padding-left: 75px;
    }
    td:nth-child(2) {
      width: 200px;
    }
    td:nth-child(3){
      color: #108DE9;
      cursor: pointer;
    }
  }
  .safety-info-icon {
    font-size: 35px;
    vertical-align: middle;
    margin: 0 20px 0 16.5px;
  }
  .good-major-tag {
    margin-right: 10px;
  }
}
</style>

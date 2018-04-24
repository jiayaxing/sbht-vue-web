<template>
  <div class="case-report-container">
    <table class="case-base">
      <tr>
        <td>姓名</td>
        <td>{{caseDetail.name}}</td>
        <td>年龄</td>
        <td>{{caseDetail.age}}</td>
      </tr>
      <tr>
        <td>治疗项目</td>
        <td>{{caseDetail.cureItem}}</td>
        <td>联系电话</td>
        <td>{{caseDetail.phone}}</td>
      </tr>
      <tr>
        <td>发起医生</td>
        <td>张潇潇</td>
        <td>会诊时间</td>
        <td>{{caseDetail.consultationTime}}</td>
      </tr>
      <tr>
        <td>邀请医生</td>
        <td>张医生、李医生、王医生</td>
        <td>参与医生</td>
        <td>张医生、王医生</td>
      </tr>
    </table>
    <table class="case-detailed">
      <tr>
        <td>主诉</td>
        <td>牙缺失</td>
      </tr>
      <tr>
        <td>现有病史</td>
        <td>原发性高血压，治疗3年 服用降压药后 血压 80-120</td>
      </tr>
      <tr>
        <td>既往病史</td>
        <td>无</td>
      </tr>
      <tr>
        <td>全身状况及其他</td>
        <td>无</td>
      </tr>
      <tr>
        <td>检查结果</td>
        <td>11，12，13牙缺失</td>
      </tr>
      <tr>
        <td>既往治疗历史</td>
        <td>种植</td>
      </tr>
      <tr>
        <td>处置结果</td>
        <td>正畸治疗</td>
      </tr>
      <tr>
        <td>会诊意见结果</td>
        <td>正畸治疗</td>
      </tr>
      <tr>
        <td>种植知情同意书</td>
        <td><a href="###">正畸知情同意书</a></td>
      </tr>
      <tr>
        <td>病历号</td>
        <td>{{caseDetail.caseId}}</td>
      </tr>
      <tr>
        <td>影像资料</td>
        <td><img src="" alt=""></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'casePeportForm',
  data() {
    return {
      
    }
  },
  props: {
    caseDetail:{
      type:Object,
      required:true,
    }
  },
  created () {
    
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .case-report-container{
    color: #313131;
    .case-base{
      background: #e4e4e4;
      padding: 20px;
      tr{
        line-height: 30px;
        td:nth-child(2n+1){
          font-weight: 600;
          width: 100px;
          text-align: right;
        }
        td:nth-child(2n){
          padding-left: 30px;
        }
      }
    }
    .case-detailed{
      background: #f2f2f2;
      padding: 20px;
      tr{
        line-height: 40px;
        td:first-child{
          font-weight: 600;
          width: 100px;
          text-align: right;
        }
        td:last-child{
          padding-left: 30px;
        }
      }
    }
    table{
      width: 100%;
    }
  }
</style>



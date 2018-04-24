<template>
  <div class="dashboard-container app-container">
    <personal-msg></personal-msg>
    <div class="performance-date-wrap">
      <el-date-picker
        v-model="performanceDate"
        type="date" size="mini"
        :pickerOptions="pickerOptions"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <personal-performance></personal-performance>
  </div>
</template>

<script>
import PersonalMsg from "./PersonalMsg"
import PersonalPerformance from "./PersonalPerformance/index"
export default {
  name: "dashboard",
  data() {
    return {
      performanceDate:'',
      pickerOptions:{
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      }
    }
  }
  ,
  components: {
    PersonalMsg,
    PersonalPerformance
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .performance-date-wrap {
    text-align: right;
    margin: 50px 80px;
  }
</style>

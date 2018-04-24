<template>
  <div class="performance-card">
    <div class="performance-icon">
      <svg-icon :icon-class="icon" ></svg-icon>
    </div>
    <div class="performance-msg-container">
      <p>{{title}}</p>
      <p class="performance-count">{{count}}</p>
      <p :class=" compare ? 'performance-compare-up': 'performance-compare-decline'">
        <span>
          <svg-icon :icon-class=" compare ? 'arrowsolidtop': 'arrowsolidbottom'" ></svg-icon>
        </span>
        <span>{{compareCount}}</span>
        <span >同比上月</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "personalCard",
  data() {
    return {
    }
  },
  props:{
    title:'',
    count:'',
    compareCount:'',
    compare:'',
    icon:''
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .performance-card{
    width: 220px;
    height: 100px;
    padding: 15px 20px;
    border: 1px solid $mainBdColor;
    border-radius: 5px;
    .performance-icon{
      float: left;
      font-size: 30px;
      color: #fff;
      background: #48a9ee;
      line-height: 0px;
      border-radius: 50%;
      margin-top: 20px;
    }
    .performance-msg-container{
      padding-left: 20px;
      overflow: hidden;
      color: $mainTextColor;
      font-size: 12px;
      .performance-count{
        color: $mainTextWeColor;
        font-size: 30px;
        font-weight: 500;
        line-height: 42px;
      }
      .performance-compare-up{
        color: #ef4c4f;
      }
      .performance-compare-decline{
        color: #009f59;
      }
    }
  }
</style>

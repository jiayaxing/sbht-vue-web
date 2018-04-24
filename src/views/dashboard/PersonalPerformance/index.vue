<template>
  <div class="performance-card-wrap">
      <performance-card v-for="item in performanceList" 
      :title="item.title" :count="item.count" 
      :compareCount="item.compareCount" :compare="item.compare"
      :icon="item.icon" :key=item.id>
      </performance-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import performanceCard from './performanceCard';
export default {
  name: "personalPerformance",
  data() {
    return {
      performanceList:[
        { id:0,
          title:'本月会诊数',
          count:15,
          compareCount:'10%',
          compare:true,
          icon:'month30'
        },
        {
          id:1,
          title:'24小时内会诊数',
          count:4,
          compareCount:'10%',
          compare:false,
          icon:'time24'
        },
        {
          id:2,
          title:'我发起的会诊',
          count:6,
          compareCount:'8%',
          compare:false,
          icon:'initiator'
        },
        {
          id:3,
          title:'被邀请的会诊',
          count:11,
          compareCount:'10%',
          compare:true,
          icon:'byInitiator'
        }
      ]
    };
  },
  components:{
    performanceCard
  },
  computed: {
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .performance-card-wrap {
    margin: 0px 80px;
    display: flex;
    justify-content: space-between;
  }
</style>

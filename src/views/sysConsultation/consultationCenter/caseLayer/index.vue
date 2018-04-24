<template>
  <div class="case-layer-container">
    <svg-icon icon-class="closed" class="case-layer-close" 
    v-show="closeIcon" @click.native="handleLayerClose"></svg-icon>
    <case-form :case-detail="caseDetail" class="case-from" 
    @mouseenter.native="handleEnter"
    @mouseleave.native="handleLeave"></case-form>
    <svg-icon icon-class="closed" class="case-layer-close" 
    v-show="closeIcon" @click.native="handleLayerClose"></svg-icon>
  </div>
</template>

<script>
import caseForm from "@/components/casePeportForm"
export default {
  name: "caseLayer",
  data() {
    return {
      closeIcon:false
    };
  },
  components: {
    caseForm
  },
  methods: {
    handleEnter() {
      this.closeIcon = false;
    },
    handleLeave() {
      this.closeIcon = true;
    },
    handleLayerClose() {
      this.$store.commit('TOGGLE_CASELAYER', false)
      this.$store.commit('SET_CASEDETAIL', {})
    }
  },
  computed: {
    caseDetail() {
      return this.$store.state.casePeportForm.caseDetail
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .case-layer-container{
    position: fixed;
    top: 0;bottom: 0;left: 0;right: 0;
    background: rgba(0,0,0,0.8);
    z-index: 1005;
    overflow-y:scroll;  
    overflow-x:hidden;
    .case-layer-close{
      position: fixed;
      font-size: 40px;
      color: #fff;
      top: 50%;
      cursor: pointer;
      opacity: .5;
      transition: all .6s;
      &:hover{
        opacity: 1;
      }
      &:first-child{
        left: 200px;
      }
      &:last-child{
        right: 200px;
      }
    }
  }
  .case-from{
    width: 600px;
    margin: 0 auto;
  }
</style>

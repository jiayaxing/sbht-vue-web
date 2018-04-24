<template>
  <div class="consultation-container">
    <div class="case-container">
      <case-form :case-detail="caseDetail" ></case-form>
    </div>
    <case-im class="im-container"></case-im>
  </div>
</template>

<script>
import caseForm from "@/components/casePeportForm"
import caseIm from "./im"
export default {
  name: 'consultation',
  data() {
    return {
      sengMessage:''
    }
  },
  components: {
    caseForm,
    caseIm
  },
  computed: {
    caseDetail() {
      return this.$store.state.casePeportForm.caseDetail
    }
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .consultation-container{
    height: 100%;
    overflow: hidden;
    .case-container{
      float: left;
      width: 60%;
      height: 100%;
      overflow: auto;
    }
    .im-container{
      height: 100%;
      margin-left: 60%;
      position: relative;
    }
  }
</style>

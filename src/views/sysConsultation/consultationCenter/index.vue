<template>
  <div class="app-container consultation-center-container">
    <doctor-online></doctor-online>
    <cilent-list></cilent-list>
    <case-layer v-show="caseLayerIsShow"></case-layer>
  </div>
</template>

<script>
import doctorOnline from './doctorOnline'
import cilentList from './clientList'
import caseLayer from './caseLayer'

export default {
  name: 'consultationCenter',
  data() {
    return {
      caseDetail:{}
    }
  },
  components: {
    doctorOnline,
    cilentList,
    caseLayer
  },
  methods: {
    // caseLayerIsShow(item) {
    //   this.caseDetail = item
    // }
  },
  computed: {
    caseLayerIsShow() {
      return this.$store.state.casePeportForm.caseLayer
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .consultation-center-container{
    display: flex;
    flex-direction: column;
  }
</style>

<template>
  <div class="app-container">
    <basic-info></basic-info>
    <safety-info></safety-info>
  </div>
</template>

<script>
import basicInfo from "./basicInfo"
import safetyInfo from "./safetyInfo"
export default {
  name: "personal",
  components: {
    basicInfo,
    safetyInfo
  },
  computed: {

  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

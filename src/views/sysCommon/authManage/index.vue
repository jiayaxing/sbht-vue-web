<template>
  <div class="app-container">
    <h1>姓名:{{name}}</h1>
    <h1>当前权限:{{role}}</h1>
  </div>
</template>

<script>
export default {
  name: "authManage",
  computed: {
    role() {
      return this.$store.getters.roles
    },
    name() {
      return this.$store.getters.name
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Navbar   from  './components/Navbar.vue'
import Sidebar  from  './components/Sidebar/index.vue'
import AppMain  from  './components/AppMain.vue'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
}
</style>

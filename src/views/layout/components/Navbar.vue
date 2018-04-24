<template>
  <el-menu class="navbar" mode="horizontal">
    <app-logo></app-logo>
    <hamburger class="hamburger-container" @click.native="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <avatar :avatar="avatar" :name="name" class="avatar-container"></avatar>
    <Message-tooltip class="message-tooltip"></Message-tooltip>
  </el-menu>
</template>

<script>
import { mapGetters } from  'vuex'
import AppLogo        from  '@/components/Logo'           //Logo
import Breadcrumb     from  '@/components/Breadcrumb'     //面包屑
import Hamburger      from  '@/components/Hamburger'      //折叠导航栏
import Avatar         from  '@/components/Avatar'         //用户
import MessageTooltip from  '@/components/MessageTooltip' //信息

export default {
  components: {
    AppLogo,
    Breadcrumb,
    Hamburger,
    Avatar,
    MessageTooltip,
  },
  computed: {
    ...mapGetters([
      'sidebar', //导航栏折叠状态
      'avatar' , //用户头像
      'name'     //用户name
    ])
  },
  // 左侧导航折叠
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>
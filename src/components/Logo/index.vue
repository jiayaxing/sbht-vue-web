<template>
  <div class="app-logo" :style="backgroundImg">
    <router-link to="/dashboard">
      <h1>瑞尔诊所会诊平台</h1> 
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data(){
    return {
      backgroundImg: {
          backgroundImage: 'url(' + require('@/assets/Arrail.png') + ')',
        }
    }
  }
}
</script>
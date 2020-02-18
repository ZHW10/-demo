<template>
<div id="app">
  <HeaderApp/>
  <router-view></router-view>
  <FooterNav/>
</div>
</template>

<script>
import FooterNav from './commponts/FooterNav/FooterNav.vue'
import HeaderApp from './commponts/HeaderApp/HeaderApp'
export default {
  components:{
    FooterNav,
    HeaderApp
    }
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
</style>

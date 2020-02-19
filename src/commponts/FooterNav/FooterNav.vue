<template>
  <div id="FooterNav">
    <div @click="goPath('/Profile')" :class="{active:$route.path==='/profile'}" class="item">
      <i class="icon-shouye iconfont"></i>
      <span>首页</span>
    </div>
    <div @click="goPath('/classify')" :class="{active:$route.path==='/classify'}" class="item">
      <i class="icon-fenlei iconfont"></i>
      <span>分类</span>
    </div>
    <div @click="goPath('/buying')" :class="{active:$route.path==='/buying'}" class="item">
      <i class="icon-icon- iconfont"></i>
      <span>值得买</span>
    </div>
    <div @click="goPath('/shoping')" :class="{active:$route.path==='/shoping'}" class="item">
      <i class="icon-gouwuche iconfont"></i>
      <span>购物车</span>
    </div>
    <div @click="goPath('/person')" :class="{active:$route.path==='/person'}" class="item">
      <i class="icon-geren iconfont"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods:{
    goPath(path){
      this.$router.push(path)
    }
  }
};
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl";
#FooterNav
  top-border-1px($fff)
  position fixed
  bottom 0
  left 0
  width 100%
  height 98px
  background white
  display flex
  .item
    width 20%
    height 100%
    display flex
    flex-direction column
    align-items center
    justify-content center
    &.active
      color $red
    i
      // display block
      // width 40px
      // height 40px
      // background url(1.webp) no-repeat
</style>

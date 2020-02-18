<template>
  <div id="profile">
    <div class="header">
      <div class="headerTop">
        <a class="logo" href="/"></a>
        <div class="search">
          <i class="icon-suosou iconfont"></i>
          <span class="placeholder">搜索商品, 共20259款好物</span>
        </div>
        <van-button class="button"  color="#DD1A21" plain type="primary">登录</van-button>
      </div>
      <div class="headerBottom">
        <div class="headerBottomItem"></div>
        <div class="headerBottomItem"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import 'vant/lib/button/style';
import {indexNav} from '../api/index'
import {Button} from 'vant'
Vue.use(Button)
  export default {
    data:{
      Navdatas:[]
    },
    mounted:{
     async getHeaderNav(){
       await indexNav()
     }
    }
  }
</script>

<style lang="stylus">
#profile
  position relative
  width 100%
  height 100%
  .header
    width 100%
    height 148px
    .headerTop
      height 88px
      width 100%
      display flex
      justify-content center
      align-items center
      .search
        width 442px
        height 56px
        color  #666
        line-height 56px
        font-size 26px
        margin-right 16px
        background-color: #ededed
        display flex
        justify-content center
      .button
        width 74px
        height 40px
        line-height 40px
        font-size 20px
        border-radius 10px
      .logo
        display block
        width 138px
        height 40px
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp');
        background-size cover
    .headerBottom
      height 60px
      width 100%
      background green
</style>

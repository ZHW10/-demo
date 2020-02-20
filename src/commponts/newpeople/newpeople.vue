<template>
  <div id="newpeople" v-if="indexActivityModule">
    <div class="newpeopleTop">
      <span>新人专享礼</span>
    </div>
    <div class="newpeopleBotton">
      <a href="">
        <div class="aTop">新人专享礼包</div>
        <div class="aBottom">
          <div>
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
      </a>
      <div>
        <div class="module1">
          <a href="">
            <div class="module1Left">
              <span class="q1">{{indexActivityModule[0].title}}</span>
              <span class="q2">{{indexActivityModule[0].subTitle}}</span>
            </div>
            <div class="module1Right">
              <div>
                <img :src="indexActivityModule[0].picUrl" alt="">
              </div> 
            </div>
          </a>
        </div>
        <div class="module2">
          <a href="">
              <div class="module2Top">{{indexActivityModule[1].title}}</div>
              <div class="module2Bottom">{{indexActivityModule[1].tag}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        indexActivityModule:state=>state.categoryIndex.indexActivityModule
      })
    }
  }
</script>

<style lang="stylus">
#newpeople
  background white
  width 100%
  height 558px
  margin-bottom .26667rem
  margin-top .26667rem
  padding-bottom .4rem
  .newpeopleTop
    height 94px
    width 100%
    text-align center
    >span
      text-align center 
      display inline-block
      width 160px
      height 89px
      line-height 89px
      box-sizing border-box
      font-size .42667rem
      position relative
      &::after
        content ''
        position absolute
        top .6rem
        right -0.53333rem
        width: .32rem;
        height: .04rem;
        background: #333;
      &::before
        content ''
        position absolute
        top .6rem
        left: -.53333rem;
        width: .32rem;
        height: .04rem;
        background: #333
  .newpeopleBotton
    width 100%
    height 438px
    padding-left: .4rem
    display flex
    >a
      width 343px
      height 100%
      display block
      background: #F9E9CF
      margin-right: .05333rem;
      .aTop
        width 100%
        height 78px
        font-size: .42667rem;
        padding: .4rem 0 0 .4rem
        color black
        box-sizing border-box
      .aBottom
        margin .49333rem auto
        position relative
        width: 3.44rem
        height: 300px
        >div
          width: 100%
          height: 100%
          >img
            width 100%
            height 100%
    >div
      width 343px
      height 100%
      .module1
        width 100%
        height 215px
        background: #FBE2D3;
        border-radius: 4px;
        margin-bottom: .05333rem
        >a
          display: block;
          color: #333;
          width: 343px
          height: 251px
          float: left
          border-radius: .05333rem
          margin: 0 .05333rem .05333rem 0
          font-size: .32rem;
          padding: .26667rem 0 0 .4rem
          box-sizing border-box
          display flex
          .module1Left
            width 113px
            height 100%
            .q1
              width 100%
              height 48px
              line-height 48px
              font-size: .42667rem
              display block
            .q2
              height 36px
              line-height 36px
              display block
              color: #7F7F7F
              font-size: .32rem;
          .module1Right
            width 200px
            height 100%
            div
              width 100%
              height 100%
              img
                display block
                width 100%
                height 100%
      .module2
        width 343px
        height 215px
        background: #FFECC2;
        border-radius: 4px;
        >a
          display block
          width 100%
          height 100%
          border-radius: .05333rem;
          margin: 0 .05333rem .05333rem 0;
          padding: .26667rem 0 0 .4rem
          .module2Top
            margin-bottom 10px
            font-size .42667rem
            color black
          .module2Bottom
            padding: 0 .13333rem;
            height: .42667rem;
            display: inline-block;
            background: #CBB693;
            border-radius: .05333rem;
            color: #fff;
            font-size: .29333rem;
            line-height: .42667rem;
            text-align: center;
</style>

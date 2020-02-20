<template>
  <div id="classify">
    <div class="classHeader">
      <div>
        <i class="icon-suosou iconfont"></i>
        <span>搜索商品, 共22029款好物</span>
      </div>
    </div>
    <div class="classifyBody">
      <div class="classifyBodyLeft">
        <ul class="scroll">
          <li  @click="goPage(index,NavDatasItems.id)" :class="oldIndex==index?'active':''" class="changLi" v-for="(NavDatasItems,index) in NavDatas" :key="index">{{NavDatasItems.name}}</li>
          
        </ul>
      </div>
      <div class="classifyBodyRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {DATAS,DATASNAV} from '../store/mutations-type'
  export default {
    data(){
      return{
        NavDatas:{},
        oldIndex:-1,
        Datas:{},
        id:0
      }
    },
    async mounted(){
      let result=await this.$API.cateNavDatas()
      this.NavDatas=result.categoryL1List
      this.$store.commit(DATASNAV,this.NavDatas[0])
      this.$store.dispatch('getBuyindex',0)
        let scroll = new BScroll('.classifyBodyLeft',{
            scrollY:true,
            click:true
          })
    },
    methods:{
      goPage(index,id){
        if(this.oldIndex==index)return
        this.$store.dispatch('getBuyindex',index)
        this.$store.commit(DATASNAV,this.NavDatas[index])
        this.oldIndex=index
        this.id=id
        this.$router.push({path:'/classify/cateList',query:{categoryId:id}})
      }
    }
  }
</script>

<style lang="stylus">
#classify
  padding-top 100px
  box-sizing border-box
  width 100%
  height 100%
  background #ededed
  .classHeader
    width 100%
    height 88px
    position relative
    z-index 1
    display flex
    justify-content center
    align-items center
    background #fff
    >div
      width 690px
      height 56px
      font-size: .37333rem;
      background-color: #ededed
      border-radius: .10667rem
      display flex
      justify-content center
      align-items center
      >i 
        width 28px
        height 28px
        display block
        margin-right: .13333rem
      >span 
        display block
        width 317px
        height 41px
        line-height 41px
        color: #666
        font-size: 26px
  .classifyBody
    width 100%
    height 1044px
    margin-top 2px
    background #ededed
    display flex
    .classifyBodyLeft
      width 162px
      height 100%
      margin-right 2px
      background #fff
      overflow hidden
      >ul
        >li
          width 100%
          height 50px
          text-align center
          line-height 50px
          color: #333
          padding-top: .53333rem;
          font-size: .37333rem
          position relative
        .active
          color #ab2b2b
          &::before
            content ''
            position absolute
            left 0
            top .53333rem
            height 50px
            width 6px
            background #ab2b2b 
    .classifyBodyRight
      width 586px
      height 100%
      background #fff
      padding: .4rem .4rem .28rem
</style>

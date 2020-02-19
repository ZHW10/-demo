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
          <div class="left">
            <div class="itemLeft">
              <div @click="goPage()" class="headerBottomItem"><span>推荐</span></div>
              <div @click="goPage(navItems.id)" class="headerBottomItem" v-for="(navItems,index) in Navdatas" :key="index">
              <span>{{navItems.name}}</span>
            </div>
            </div>
          </div>
          <div class="right">
            <van-icon  size="20px" name="arrow-down" />
          </div>
      </div>
    </div>
    <div v-if="this.$route.path=='/Profile'" class="IndexContain">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(focusListItems,index) in categoryIndex.focusList" :key="index">
          <img :src="focusListItems.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="indexService">
        <ul>
          <a href="/" v-for="(policyDescListItems,index) in categoryIndex.policyDescList" :key="index">
            <li>
              <i :style="{ 'background-image': 'url(' + policyDescListItems.icon + ')','background-repeat':'no-repeat','background-size':'cover' }"></i>
              <span>{{policyDescListItems.desc}}</span>
            </li>
          </a>
        </ul>
      </div>
      <div class="slide">
        <div class="slide-wrapper">
          <div class="slide-item" v-for="(kingKongListItem,index) in kingKongList" :key="index">
            <a :href="kingKongListItem.schemeUrl">
              <div class="kingKongListItemImg" :style="{ 'background-image': 'url(' + kingKongListItem.picUrl + ')','background-repeat':'no-repeat','background-size':'cover' }"></div>
              <div class="kingKongListItemText">{{kingKongListItem.text}}</div>
            </a>
          </div>
        </div>
      </div>
      <advertising/>
    </div> 
    <router-view v-else></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import advertising from '../commponts/advertising/advertising'
  export default {
    components:{
      advertising
    },
    data(){
      return{
        Navdatas:{},
        categoryIndex:{},
        kingKongList:{}
      }
    },
    async mounted(){
       this.Navdatas=await this.$API.indexNav()
       this.$store.dispatch('getcategoryindex')
       this.categoryIndex=await this.$API.indexContain()
       this.kingKongList=this.categoryIndex.kingKongModule.kingKongList
       this.$nextTick(()=>{
         let scroll = new BScroll('.left',{
            scrollX:true,
            click:true
          })
       })
    },
    
    methods:{
      goPage(id){
        if(id){
          this.$router.push({path:'/Profile/list',query:{categoryId:id}})
        }else{
          this.$router.push('/Profile')
        }
        
      }
    },
    watch:{
    }
  }
</script>

<style lang="stylus">
@import "../common/stylus/mixins.styl";
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
      // background green
      display flex
      color #333 
      .right
        width 100px
        height 60px
        padding-top 10px
        display flex
        justify-content center
        text-align center
      .left
        width 650px
        height 100%
        display flex
        flex-wrap nowrap
        overflow hidden
        white-space nowrap
        .itemLeft
          .headerBottomItem
            display inline-block
            margin-left  0.26667rem
            padding 0 18px
            height 60px
            line-height 60px
            box-sizing border-box
            span
              font-size 0.37333rem

  .IndexContain
    width 100%
    .my-swipe 
      width 100%
      height 370px
      .van-swipe-item 
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .indexService
      width 100%
      height 72px
      line-height 72px
      >ul
        display flex
        justify-content center
        >a
          padding-right 41px
          >li
            >i
              display inline-block
              width 32px
              height 32px
              vertical-align: middle
            >span 
              vertical-align: middle
    .slide
      width 100%
      height 373px
      .slide-wrapper
        width 100%
        height 341px
        .slide-item
          width 20%
          height 50%
          float left
          >a
            display block
            width 100%
            height 100%
            text-align center
            .kingKongListItemImg
              display inline-block
              width 110px
              height 110px
            .kingKongListItemText
              font-size 0.32rem
              margin-top .13333rem

</style>

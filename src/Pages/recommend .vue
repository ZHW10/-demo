<template>
  <div id="recommend">
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        categoryId:'',
        indexOthers:{}
      }
    },
    async mounted(){
      this.indexOthers=await this.$API.indexNav()
    },
    watch:{
      '$route':'fetchid'    
    },
    methods:{
      async fetchid(){
        this.categoryId=this.$route.query.categoryId
        if(this.categoryId){
          this.indexOthers=await this.$API.indexNav()
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
.my-swipe 
    width 100%
    height 370px
  .van-swipe-item 
    width 100%
    height 100%
    color: #fff
    background-color: #39a9ed;

</style>

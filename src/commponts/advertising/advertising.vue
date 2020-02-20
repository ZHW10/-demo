<template>
  <div id="advertising" v-if="floorList">
      <div class="floorListItems"  v-for="(floorListItem,index) in floorList.floorList" :key="index" :style="`height:${floorListItem.height/3}px;`">
      <a class="cellsItem" :href="cellsItem.schemeUrl" v-for="(cellsItem,index) in floorListItem.cells" :key="index" :style="`background-image:url('${cellsItem.picUrl}');height:100%;width:${1/floorListItem.columnNum*96}%;`">
      </a>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
  export default {
      data(){
          return{
             
          }
      },
      mounted(){
        // this.$nextTick(()=>{
        //   let floorListItems=document.querySelectorAll('.floorListItems')
        // // console.log(floorListItems[0])
        // floorListItems[0].style.height=100%
        // // floorListItems[0].style.width=100%
        // })
        
      },
      computed:{
        ...mapState({
            floorList:state => state.categoryIndex.bigPromotionModule
        })
    },
  }
</script>

<style lang="stylus">
#advertising
  background white
  width 100%
  height 828px
  background #1674e3
  .floorListItems
    width 100%
    display flex
    justify-content center
    align-content center
    margin-bottom .16667rem
    .cellsItem
      display block
      // width 100%
      background-size 100% 100%
      background-repeat no-repeat
</style>

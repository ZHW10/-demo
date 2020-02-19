<template>
  <div id="advertising" v-if="floorList">
      <div class="floorListItems"  v-for="(floorListItem,index) in floorList.floorList" :key="index" :style="`height:${floorListItem.height/3}px;`">
      <!-- <a  class="cellsItem" :href="cellsItem.schemeUrl" v-for="(cellsItem,index) in floorListItem.cells" :key="index<1" :style="`background-image:url('${cellsItem.picUrl}');height:100%; width:100%;`">
      </a> -->
      <a  class="cellsItem" :href="cellsItem.schemeUrl" v-for="(cellsItem,index) in floorListItem.cells" :key="index" :style="`background-image:url('${cellsItem.picUrl}');height:94%;width:${1/floorListItem.columnNum*96}%;`">
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
        //   console.log(floorList.floorList)
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
    width 100%
    height 828px
    .floorListItems
        width 100%
        display flex
        justify-content center
        align-content center
        background #fff
        .cellsItem
            display block
            // width 100%
            background-size 100% 100%
            background-repeat no-repeat
</style>

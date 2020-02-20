<template>
  <div v-if="Datas" id="classifyContain">
    <div class="scrollbox">
      <div class="picture">
        <img :src="DatasNav.bannerUrl" alt />
      </div>
      <ul v-if="Datas.categoryList" class="ulScroll">
        <li v-for="(Datasitem,index) in Datas.categoryList" :key="index">
          <div class="picturetop">
            <img :src="Datasitem.wapBannerUrl" alt />
          </div>
          <div class="picturebottom">{{Datasitem.name}}</div>
        </li>
      </ul>
      <ul v-else class="ulScroll">
        <li v-for="(Datasitem,index) in Datas.subCateList" :key="index">
          <div class="picturetop">
            <img :src="Datasitem.wapBannerUrl" alt />
          </div>
          <div class="picturebottom">{{Datasitem.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  mounted() {
      let scroll = new BScroll("#classifyContain", {
        scrollY: true,
        click: true
      });
  },
  computed: {
    ...mapState({
      Datas: state => state.Datas,
      DatasNav: state => state.DatasNav
    })
  }
};
</script>

<style lang="stylus" scoped>
#classifyContain
  width 528px
  height 100%
  .scrollbox
    overflow hidden
    .picture
      width 528px
      height 192px
      margin-bottom: .42667rem
      img
        width 100%
        height 100%
    .ulScroll
      width 100%
      max-height: 999999px;
      >li
        width 144px
        height 216px
        margin 0 16px
        float left
        .picturetop
          width 100%
          height 144px
          img
            display block
            width 100%
            height 144px
        .picturebottom
          width 100%
          height 72px
          line-height 36px
          text-align center
          font-size: .32rem;
          color: #333;
          text-align: center;
</style>

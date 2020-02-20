<template>
  <div id="search">
    <div class="searchBody">
      <div class="searchBodyTop">
        <form class="searchForm" action="/">
          <van-search
            class="vanSearch"
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="searchBodybottom">
        <div class="hotsearch">
          <h3>热门搜索</h3>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: '',
      datas:{}
    };
  },
  mounted(){
    this.datas=this.$API.SearchIndex()
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    }
  }
}
</script>

<style lang="stylus">
#search
  padding-top 104px
  box-sizing border-box
  width 100%
  height 100%
  background #eee
  .searchBody
    width 100%
    height 849px
    .searchBodyTop
      width 100%
      height 88px
      box-sizing border-box
      padding: 0 .4rem;
      background #fff
      .searchForm
        width 100%
        height 100%
        .vanSearch
          height 100%
          width 100%
          padding 0
          .van-cell
            height 56px
            line-height 46px
            font-size: 28px
            .van-field__left-icon
              width 28px
              height 28px
              .van-icon
                width 50px
                height 50px
        .van-search__action
          font-size 30px
    .searchBodybottom
      width 100%
      height 438px
      padding: 0 .4rem .4rem;
      background-color: #fff;
      .hotsearch
        width 690px
        height 90px
        line-height 90px
        h3
          color: #999
          font-size 28px
          width 112px
          height 41px
</style>

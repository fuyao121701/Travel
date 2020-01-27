<template>
  <div>
    <div class="hot-wrraper">
      热销推荐
    </div>
    <div class="info" v-for="item of recommendList" :key="item.id">

      <img class="info-img" :src="item.imgUrl" alt="">
      <div class="info-content">
        <p class="info-title">{{item.title}}</p>
        <p class="info-desc">{{item.desc}}</p>
        <button class="info-buttom">{{item.detail}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园',
          detail: '查看详情'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园',
          detail: '查看详情'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园',
          detail: '查看详情'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园',
          detail: '查看详情'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园',
          detail: '查看详情'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .hot-wrraper
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .info
    width 100%
    display flex
    .info-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .info-content
      padding .1rem
      .info-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .info-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .info-buttom
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>

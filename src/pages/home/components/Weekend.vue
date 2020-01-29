<template>
  <div class="wrraper">
    <div class="title">
      周末去哪儿
    </div>
    <div class="item" v-for="item of weekendList" :key="item.id">
      <div class="item-img-wrraper">
        <img class="item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="item-info">
        <p class="item-info-title">{{item.title}}</p>
        <p class="item-info-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      weekendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋公园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrraper
  width 100%
  .title
    background #eee
    padding 0 .2rem
    line-height .8rem
    margin-bottom .1rem
  .item
    .item-img-wrraper
      overflow hidden
      height: 0;
      padding-bottom: 33.9%;
    .item-info
      .item-info-title
        padding .2rem .2rem 0 .2rem
      .item-info-desc
        padding .2rem
        color #ccc
</style>

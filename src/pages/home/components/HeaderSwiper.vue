<template>
  <div class="wrraper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HeaderSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrraper >>> .swiper-pagination-bullet-active
    background #fff

  .wrraper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee
    .swiper-img
      width 100%

</style>

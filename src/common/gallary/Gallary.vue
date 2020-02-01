<template>
  <div class="container" @click="closeGallary">
    <div class="wrraper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="grallry-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/2f2ec46b-a029-4bb7-bea9-f2dd47f23e51.jpg_r_640x420x90_e1138337.jpg"/>
        </swiper-slide>
        <swiper-slide>
          <img class="grallry-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/2f2ec46b-a029-4bb7-bea9-f2dd47f23e51.jpg_r_640x420x90_e1138337.jpg"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 当Swiper的父元素变化时例如window.resize，Swiper更新
        observer: true // 当Swiper的当前元素变化时例如window.resize，Swiper更新
      }
    }
  },
  methods: {
    closeGallary () {
      console.log('000')
      this.$emit('closeGallary', 'true')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container  >>> .swiper-pagination
  overflow inherit
  color: #fff
  position fixed
.container
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background #000
  display flex
  flex-direction column
  justify-content center
  .wrraper
    .grallry-img
      width: 100%;
      background #fff
</style>

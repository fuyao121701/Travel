<template>
  <div>
    <div class="banner" @click="clickShowGallay">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/2f2ec46b-a029-4bb7-bea9-f2dd47f23e51.jpg_r_640x420x90_e1138337.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">产品编号产品编号</div>
        <div class="banner-icon">
          <span class="iconfont"> &#xe67d;</span>
            cccc
        </div>
      </div>
    </div>
    <fade>
      <gallary v-show="showGallay" @closeGallary="closeGallary"></gallary>
    </fade>

  </div>
</template>

<script>
import Gallary from '../../../common/gallary/Gallary'
import Fade from '../../../common/fade/Fade'
export default {
  name: 'Banner',
  data () {
    return {
      showGallay: false
    }
  },
  methods: {
    clickShowGallay () {
      this.showGallay = true
    },
    closeGallary () {
      console.log('999')
      this.showGallay = false
    }
  },
  components: {
    Gallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  height 0
  padding-bottom 66.7%
  .banner-img
    width 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    height .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      line-height .5rem
      color #fff
      position absolute
      bottom 0
    .banner-icon
      position: absolute;
      right: 0;
      bottom: 0;
      line-height: 0.5rem;
      font-size: .4rem;
      color: #fff;
      padding: 0 .2rem;
      border-radius: .3rem;
      background: #2b1212;

</style>

<template>
    <div class="header">
      <router-link tag="div" to="/" class="header-abs" v-show="!showHeader">
        <span class="iconfont header-abs-icon"> &#xe61b; </span>
      </router-link>
      <div class="header-fixed" v-show="showHeader" :style="opacityStyle">
        <span class="iconfont header-fixed-icon" @click="goBack"> &#xe61b; </span>
        城市详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.opacityStyle.opacity = top / 140 > 1 ? 1 : top / 140
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    },
    goBack () {
      this.$router.push('/')
    }
  },
  activated () {
    console.log('sss')
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.header-abs
  position absolute
  left .2rem
  top .2rem
  background #000
  opacity .8
  width .6rem
  height .6rem
  border-radius .3rem
  .header-abs-icon
    color #fff
    line-height .6rem
    text-align center
    display list-item
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height .6rem
  width 100%
  z-index 1
  background #25a4bb
  text-align center
  line-height .6rem
  .header-fixed-icon
    position absolute
    left .2rem
</style>

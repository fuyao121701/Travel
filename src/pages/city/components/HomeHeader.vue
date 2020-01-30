<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont"> &#xe61b; </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  width 100%
  height .86rem
  line-height .86rem
  color #ffffff
  background $bgColor
  text-align center
  .iconfont
    float left
    color #ffffff
    width .64rem
    text-align center

</style>

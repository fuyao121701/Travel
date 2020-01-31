
<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont"> &#xe61b; </span>
    </div>
    <div class="header-input">
      <span class="iconfont"> &#xe67d; </span>
      输入城市/景点/游玩主题 </div>
    <div class="header-right"> {{this.$store.state.city}}
      <router-link to="/city">
        <span class="iconfont arrow-icon"> &#xe600; </span>
      </router-link>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}

</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    height: .86rem
    line-height: .86rem
    background-color: $bgColor
    color: #fff
    .header-left
      float left
      width: .64rem
      text-align center
    .header-input
      flex 1
      background-color #ffffff
      color #ccc
      height: .64rem
      line-height .64rem
      margin-left .2rem
      margin-top .12rem
      padding-left .2rem
      border 1px solid #00dcb4
      border-radius .1rem

    .header-right
      float right
      min-width 1.08rem
      text-align center
      .arrow-icon
        font-size .2rem

</style>

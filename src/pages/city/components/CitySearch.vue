<template>
  <div class="wrraper">
    <input class="input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.wrraper
  height .64rem
  background $bgColor
  .input
    width 95%
    margin-left 2.5%
    background white
    text-align center
    border-radius .02rem
</style>

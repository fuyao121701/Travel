<template>
  <div class="list">
    <div class="list-first border-bottom" v-for="item of list" :key="item.title">
      <div class="item">
        <span class="iconfont"> &#xe61b; </span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.list-first
  line-height .6rem
  /*position relative*/
  /*left .2rem*/
  padding-left .2rem

</style>

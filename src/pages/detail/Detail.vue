<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="box"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/DetailHeader'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .box
    background #25a4bb
    height: 15rem;
</style>

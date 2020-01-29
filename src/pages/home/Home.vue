<template>
  <div>
    <home-header></home-header>
    <header-swiper></header-swiper>
    <home-icon></home-icon>
    <recommend></recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HeaderSwiper from './components/HeaderSwiper'
import HomeIcon from './components/Icon'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSwiper,
    HomeIcon,
    Recommend,
    Weekend
  }
}
</script>
<style>

</style>

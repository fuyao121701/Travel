<template>
  <div>
    <home-header></home-header>
    <header-swiper></header-swiper>
    <home-icon></home-icon>
    <recommend></recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HeaderSwiper from './components/HeaderSwiper'
import HomeIcon from './components/Icon'
import Recommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSwiper,
    HomeIcon,
    Recommend
  }
}
</script>
<style>
</style>

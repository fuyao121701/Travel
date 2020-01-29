<template>
  <div>
    <home-header :city="city"></home-header>
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
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      city: ''
    }
  },

  components: {
    HomeHeader,
    HeaderSwiper,
    HomeIcon,
    Recommend,
    Weekend
  },
  methods: {
    getHomeCity () {
      axios.get('/api/index.json').then((result) => {
        console.log(result)
        this.city = result.data.city
      })
    }
  },
  mounted () {
    this.getHomeCity()
  }
}
</script>
<style>

</style>

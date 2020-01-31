<template>
  <div>
    <home-header></home-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :getValue="getValue"
    >

    </city-list>
    <alphabet v-on:getChild="getChildValue"></alphabet>

  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/HomeHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import Alphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      lastCity: '',
      cities: [],
      getValue: ''
    }
  },
  components: {
    HomeHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  mounted () {
    this.lastCity = this.$store.state.city
    axios.get('/api/city.json').then(this.getCityInfo)
  },

  methods: {
    getCityInfo (result) {
      console.log(result.data)
      this.cities = result.data.cities
    },
    getChildValue (val) {
      // console.log(val)
      this.getValue = val
    }
  }
}
</script>
<style scoped>

</style>

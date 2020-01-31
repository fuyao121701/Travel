<template>
  <div>
    <div class="wrraper">
      <input class="input" v-model="keyword" type="text" placeholder="输入城市名或拼音" ref="input">
    </div>
    <div class="search-content" v-show="keyword">
        <div v-for="(item,index) of searchList" :key="index" @click="handleClick(item)">{{item}}</div>
        <div> 无数据 </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Array
  },
  data () {
    return {
      keyword: '',
      searchList: []
    }
  },
  watch: {
    keyword () {
      let searchList = []
      this.cities.map((item, index) => {
        item.city.map((ite) => {
          if (this.keyword) {
            if (ite.indexOf(this.keyword) > -1) {
              searchList.push(ite)
            }
          }
        })
      })
      this.searchList = searchList
      console.log(searchList)
    }
  },
  methods: {
    handleClick (city) {
      this.keyword = ''
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {

  }
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
.search-content
  position absolute
  top 1.5rem
  left 0
  right 0
  bottom 0
  background #fff
  z-index 111
  line-height .8rem
  padding-left .2rem
</style>

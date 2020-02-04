<template>
  <div class="list" ref="wrraper" >
    <div>
      <div class="area">
        <div class="title border-bottom">
          当前城市{{getValue}}
        </div>
        <div class="city-box">
        <span class="city">
          {{this.$store.state.city}}
        </span>

        </div>

      </div>

      <div class="area">
        <div class="title border-bottom">
          热门城市
        </div>
        <div class="city-box">
        <span class="city" v-for="item of hotCity" :key="item.id" @click="handleClick(item.city)">
          {{item.city}}
        </span>

        </div>
      </div>
      <div class="area" v-for="item of cities" :key="item.letter" :ref="item.letter">
        <div class="title border-bottom">
          {{item.letter}}
        </div>
        <div class="item" v-for="(itemInfo,index) of item.city" :key="index" @click="handleClick(itemInfo)"> {{itemInfo}} </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Array,
    getValue: String
  },
  data () {
    return {
      hotCity: [
        {
          id: '001',
          city: '北京'
        },
        {
          id: '002',
          city: '上海'
        },
        {
          id: '003',
          city: '广州'
        },
        {
          id: '004',
          city: '重庆'
        },
        {
          id: '005',
          city: '杭州'
        }
      ]
    }
  },
  methods: {
    handleClick (city) {
      // this.$store.state.city = city
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrraper, {click: true})
  },

  watch: {
    getValue () {
      if (this.getValue) {
        const element = this.$refs[this.getValue][0]
        this.scroll.scrollToElement(element)
      }
      // console.log(this.getValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  overflow hidden
  position: absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .border-bottom
    border-bottom  1px solid #ccc
  .title
    line-height .52rem
    font-size .14rem
    background #eee
    padding-left .2rem
  .city-box
    padding 0 .5rem 0 .2rem
    .city
      display inline-block
      padding .1rem .2rem
      border 1px solid #eee
      border-radius .2rem
      margin .1rem .2rem
  .item
    color #777
    border-bottom 1px solid #eee
    line-height: .5rem;
    padding-left: .2rem;
</style>

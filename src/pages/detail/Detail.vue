<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <list :list="list"></list>
    <div class="box"></div>
  </div>
</template>

<script>
import axios from 'axios'
import detailBanner from './components/Banner'
import detailHeader from './components/DetailHeader'
import List from './components/List'
import Fade from '../../common/fade/Fade'
export default {
  name: 'Detail',
  data () {
    return {
      list: []
    }
  },
  components: {
    detailBanner,
    detailHeader,
    List,
    Fade
  },
  mounted () {
    axios.get('/api/detail.json', {
      params: {
        id: '001'
      }
    }).then((res) => {
      this.list = res.data.data.categoryList
    })
  }
}
</script>

<style lang="stylus" scoped>
.box
  width 100%
  height 50rem
</style>

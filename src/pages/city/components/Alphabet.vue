<template>
  <ul class="list" >
    <li class="item"
        v-for="(item,index) of list"
        :key="index"
        :ref="item.letter"
        v-on:click="childClick"
        @touchstart="handleStart"
        @touchmove="handleMove"
        @touchend="handleEnd"
    >{{item.letter}}</li>

  </ul>

</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      list: [
        {
          letter: 'A'
        },
        {
          letter: 'B'
        },
        {
          letter: 'C'
        },
        {
          letter: 'D'
        },
        {
          letter: 'E'
        }
      ],
      touchStatus: false,
      timer: null
    }
  },
  methods: {
    childClick (e) {
      // console.log(e.target.innerText)
      this.$emit('getChild', e.target.innerText)
    },
    handleStart (e) {
      this.touchStatus = true
    },
    handleMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let startY = this.$refs['A'][0].offsetTop
          let touchY = e.touches[0].clientY
          let index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < this.list.length) {
            this.$emit('getChild', this.list[index].letter)
          }
        }, 16)
      }
    },
    handleEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.list
  position absolute
  right 0
  top 0
  bottom 0
  display flex
  flex-direction column
  justify-content center
  .item
    width .5rem
    line-height .4rem
    text-align center
    color $bgColor

</style>

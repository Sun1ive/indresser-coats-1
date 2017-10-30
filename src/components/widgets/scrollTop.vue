<template>
  <div>
    <div class="scroll" @click="scrollTop"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      scrollTop () {
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped lang="stylus">
.scroll
  width 40px
  height 40px
  position fixed
  left 30px
  bottom 90px
  font-size 3rem
  color #fff
  cursor pointer
  text-shadow 1px 1px 1px #333
  &:after
    position absolute
    content '\2191'
    top 50%
    left 50%
    transform translate(-50%,-50%)
  &:before
    content ''
    position absolute
    border-top 1px solid #fff
    width 100%
</style>
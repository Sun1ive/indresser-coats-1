<template>
  <div class="wrapper"> 
    <slot></slot>
    <div class="arrow"></div>
  </div>  
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.wrapper
  position absolute
  bottom 0
  left 50%
  transform translate(-50%,-50%)
  color #fff
  text-transform uppercase
  font-family Arial, Helvetica, sans-serif
  .arrow
    min-width 40px
    min-height 40px
    &:after
      content '\2193'
      position absolute
      bottom -25%
      left 50%
      transform translate(-50%, 0%)
      font-size 3rem
</style>
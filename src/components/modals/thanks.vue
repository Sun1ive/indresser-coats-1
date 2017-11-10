<template>
  <v-container fluid class="thanks">
    <v-layout>
      <v-flex xs12>
        <h2>Спасибо!</h2>
        <p>Наш менеджер скоро свяжется с Вами.</p>
        <div class="close" @click="closeThanks"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods: {
      closeThanks() {
        this.$emit('closeThanks');
      }
    }
  }
</script>

<style scoped lang="stylus">
.thanks
  background-color #fff
  border-radius 9px

.flex
  position relative
  display flex
  justify-content center
  align-items center
  flex-direction column
  padding 2rem 3rem
  p
    font-size 1.4rem
  .close
    position absolute
    top 4%
    right 4%
    width 25px
    height 25px
    background-image url('/public/img/close.svg')
    cursor pointer

@media (max-width 440px)
  .flex
    p
      font-size 1.1rem
      text-align center
</style>
<template>
  <header>
    <v-container fluid class="header">
      <v-layout class="pt-4" justify-center align-start>
        <img src="/public/img/logo.png" alt="logo">
      </v-layout>
      <v-layout justify-center class="my-3">
        <div class="border"></div>
      </v-layout>
      <v-layout justify-center>
        <ul class="menu">
          <li>Главная</li>
          <li>Особенности</li>
          <li>Состав</li>
          <li>Купить</li>
        </ul>
      </v-layout>
      <v-layout justify-center align-center class="something">
        <v-flex xs12 sm10 md8 lg6 text-xs-center>
          <h2 class="head">Идеальное решение на осень.</h2>
          <p class="mb-0">В этом году холода наступили так быстро, что многие неуспели к ним хорошенько подготовиться. А теперь уже вроде бы поздно. Все хорошие вещи скупили, выходить из дома не хочется, а мороз все ближе. Но есть одно любопытное решение. Какое?</p>
        </v-flex>
      </v-layout>
      <arrow>
        Ответ ниже
      </arrow>
    </v-container>
  </header>
</template>


<script>
import arrow from './widgets/arrow'

  export default {
    components: {
      arrow,
    },
  }
</script>

<style scoped lang="stylus">
.header
  background-image url('/public/img/block1.jpg')
  background-size cover
  background-repeat no-repeat
  height 735px
  position relative
  .menu
    display flex
    li
      text-transform uppercase
      margin 0 1.5rem
      list-style none
      color #fff
      font-family Arial, Helvetica, sans-serif
  .something
    height 80%
    p
      color #fff
      font-size 1rem
      width 80%
      margin 1.2rem auto
  
  .border
    width 25%
    height 1px
    background-color #fff
    opacity .4
</style>
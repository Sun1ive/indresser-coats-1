<template>
  <v-container class="third" fluid>
    <v-layout justify-center class="layoutContainer">
      <h2 class="headText">Закажите пально inDresser сейчас и получите скидку.</h2>
    </v-layout>
    <v-layout justify-center class="layoutContainer">
      <ul>
        <li>Подчеркивает женственность</li>
        <li>Качественные материалы</li>
        <li>Отлично сочетается</li>
      </ul>
    </v-layout>
    <v-layout class="layoutContainer">
      <div class="border mb-5"></div>
    </v-layout>
    <v-layout class="layoutContainer">
      <v-flex xs12 sm6 md4 class="box" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.title">
        <div class="text">
          <h3>Пальто inDresser</h3>
          <p>{{ item.title }}</p>
          <div class="border"></div>
          <div class="price">{{ item.price }} ГРН</div>
          <button class="buyButton">Купить</button>
          <!-- <div class="quantity">осталось {{ item.quantity }}шт</div> -->
        </div>
      </v-flex>
    </v-layout>
    <arrow>Больше информации</arrow>
  </v-container>
</template>

<script>
import arrow from './widgets/arrow'

  export default {
    components: {
      arrow,
    },
    data () {
      return {
        items: [
          {
            title: 'Оверсайз со спущенным рукавом - пинк',
            price: 2499,
            quantity: 7,
            img: '/public/img/p4.png'
          },
          {
            title: 'Оверсайз со спущенным рукавом - классик',
            price: 1999,
            quantity: 4,
            img: '/public/img/p5.png'
          },
          {
            title: 'Оверсайз со спущенным рукавом - классик',
            price: 1999,
            quantity: 4,
            img: '/public/img/p5.png'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../stylus/card.styl'

.third
  min-height 900px
  background-color rgb(240,240,240)
  position relative
  .wrapper
    color #000
  .headText
    font-size 3rem
    text-align center
    width 80%
    color #A14F26
    margin 2rem 0
  ul
    display flex
    margin 0 0 2rem 0
    li
      list-style none
      margin 0 1rem
      position relative

</style>
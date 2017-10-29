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
      <v-flex xs12 sm5 md4 class="box" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.title">
        <div class="text">
          <h3>Пальто inDresser</h3>
          <p>{{ item.title }}</p>
          <div class="border"></div>
          <div class="price">{{ item.price }} ГРН</div>
          <button class="buyButton" @click.stop="showModal(item)">Купить</button>
          <!-- <div class="quantity">осталось {{ item.quantity }}шт</div> -->
        </div>
      </v-flex>
    </v-layout>
    <app-arrow>Больше информации</app-arrow>


    <v-dialog v-model="drawer" max-width="700">
      <app-order @closeModal="closeModal" :currentItem="currentItem"></app-order>
    </v-dialog>
  </v-container>
</template>

<script>
import arrow from './widgets/arrow'
import order from './modals/order'


  export default {
    components: {
      'app-arrow': arrow,
      'app-order': order
    },
    data () {
      return {
        drawer: false,
        items: [
          {
            title: 'Оверсайз со спущенным рукавом - пинк',
            price: 2499,
            quantity: 7,
            img: '/public/img/p4.png',
          },
          {
            title: 'Оверсайз со спущенным рукавом - классик',
            price: 1999,
            quantity: 4,
            img: '/public/img/p5.png',
          },
          {
            title: 'Оверсайз со спущенным рукавом - классик',
            price: 1999,
            quantity: 4,
            img: '/public/img/p5.png',
          },
        ],
        currentItem: {
          title: '',
          price: '',
          quantity: '',
          img: ''
        }
      }
    },
    methods: {
      showModal (item) {
        this.currentItem.title = item.title
        this.currentItem.price = item.price
        this.currentItem.quantity = item.quantity
        this.currentItem.img = item.img
        this.drawer = true
      },
      closeModal () {
        this.drawer = false
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

@media (max-width: 700px)
  .third
    min-height 1400px
    .headText
      font-size 2.3rem
    ul
      li
        text-align center
    .layoutContainer
      flex-wrap wrap
      justify-content center

@media (max-width: 600px)
  .third
    min-height 2000px

@media (max-width: 400px)
  .wrapper
    font-size .5rem
</style>
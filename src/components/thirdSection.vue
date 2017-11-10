<template>
  <v-container class="third" fluid>
    <v-layout justify-center class="layoutContainer">
      <h2 class="headText">Закажите пальто сейчас <br>
        <span class="red--text"> и получите скидку 30%</span>
      </h2>
    </v-layout>
    <v-layout justify-center class="layoutContainer">
      <ul>
        <li>Качественные материалы</li>
        <li>Подчеркивает женственность</li>
        <li>Отлично сочетается</li>
      </ul>
    </v-layout>
    <v-layout class="layoutContainer">
      <div class="border mb-5"></div>
    </v-layout>
    <v-layout class="layoutContainer">
      <v-flex xs12 sm5 md4 class="box" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.title" @click="showCarousel(item)">
        <div class="text">
          <h3>{{ item.name }}</h3>
          <p>{{ item.title }}</p>
          <div class="border"></div>
          <div class="price"><s>{{ item.oldprice }}</s> {{ item.price }} ГРН</div>
          <button class="buyButton" @click.stop="showModal(item)">Купить</button>
        </div>
      </v-flex>
        <v-flex xs12 sm5 md4 class="box">
        <img src="/public/img/p6.png" alt="coat">
        <div class="text">
          <h3>Пальто другой фирмы</h3>
          <div class="border"></div>
          <div class="price">3000-5000 ГРН</div>
          <p>Продается в любом обычном магазине</p>
        </div>
        </v-flex>
    </v-layout>
    <app-arrow>Больше информации</app-arrow>


    <v-dialog lazy v-model="drawer" max-width="500">
      <app-order @closeModal="closeModal" :currentItem="currentItem"></app-order>
    </v-dialog>

    <v-dialog ref="dialog" lazy v-model="carousel" max-width="500">
      <app-carousel :currentItem="currentItem"></app-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
import arrow from './widgets/arrow'
import order from './modals/order'
import carousel from './modals/carousel'


  export default {
    components: {
      'app-arrow': arrow,
      'app-order': order,
      'app-carousel': carousel
    },
    data () {
      return {
        drawer: false,
        carousel: false,
        items: [
          {
            name: 'Пальто свободного кроя',
            title: 'с приспущенным рукавом',
            oldprice: 2790,
            price: 1953,
            quantity: 7,
            img: '/public/img/p4.png',
            slider: ['/public/slider/1.jpg','/public/slider/2.jpg','/public/slider/3.jpg','/public/slider/4.jpg','/public/slider/5.jpg','/public/slider/6.jpg','/public/slider/7.jpg','/public/slider/8.jpg']
          },
          {
            name: 'Пальто + платье',
            title: 'готовый образ от inDresser',
            oldprice: 3780,
            price: 2844,
            quantity: 4,
            img: '/public/img/p5.png',
            slider: ['/public/slider/ready1.jpg','/public/slider/ready2.jpg','/public/slider/ready3.jpg','/public/slider/ready1.jpg','/public/slider/ready2.jpg','/public/slider/ready3.jpg','/public/slider/ready1.jpg','/public/slider/ready2.jpg']
          }
        ],
        currentItem: {
          name: '',
          title: '',
          price: '',
          quantity: '',
          img: ''
        }
      }
    },
    methods: {
      showModal (item) {
        this.currentItem = item
        this.drawer = true
      },
      closeModal () {
        this.drawer = false
      },
      showCarousel (item) {
        this.$refs.dialog.$refs.dialog.style.borderRadius = '8px'
        this.currentItem = item
        this.carousel = true
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
        margin 0 .8rem
    .layoutContainer
      flex-wrap wrap
      justify-content center

@media (max-width: 600px)
  .third
    min-height 2000px

@media (max-width: 400px)
  .third
    ul
      flex-direction column
      li
        margin 1rem 0
  .wrapper
    font-size .6rem

</style>
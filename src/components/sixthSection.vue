<template>
  <v-container class="sixth" fluid>
    <v-layout column align-center class="layoutContainer py-5">
      <h2 class="white--text">Хватит мерзнуть!</h2>
      <p class="white--text text-xs-center text-sm-left">Купите пально inDresser и уже завтра ловите улыбки мужчин.</p>
    </v-layout>
    <v-layout justify-center class="layoutContainer">
      <v-flex xs12 sm6 md4 class="box" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.title" @click.stop="showCarousel(item)">
        <div class="text">
          <h3>Пальто inDresser</h3>
          <p>{{ item.title }}</p>
          <div class="border"></div>
          <div class="price">{{ item.price }} ГРН</div>
          <button class="buyButton" @click.stop="showOrder(item)">Купить</button>
        </div>
      </v-flex>
    </v-layout>
    <v-dialog lazy v-model="drawer" max-width="500">
      <app-order :currentItem="currentItem" @closeModal="closeModal"></app-order>
    </v-dialog>
    <v-dialog lazy v-model="carousel" max-width="700">
      <app-carousel :currentItem="currentItem"></app-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
import order from './modals/order'
import carousel from './modals/carousel'


  export default {
    components: {
      'app-order': order,
      'app-carousel': carousel,
    },
    data () {
      return {
        drawer: false,
        carousel: false,
        items: [
          {
            title: 'Оверсайз со спущенным рукавом - пинк',
            price: 2499,
            quantity: 7,
            img: '/public/img/p4.png',
            slider: ['/public/slider/p30bej.jpg','/public/slider/p30bej2.jpg','/public/slider/p30bej3.jpg','/public/slider/p30bej4.jpg','/public/slider/p30bej5.jpg',]
          },
        ],
        currentItem: {}
      }
    },
    methods: {
      showOrder (item) {
        this.currentItem = item
        console.log(this.currentItem);
        this.drawer = true
      },
      closeModal () {
        this.drawer = false
      },
      showCarousel (item) {
        this.currentItem = item
        console.log(this.currentItem);
        this.carousel = true
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../stylus/card.styl'

.sixth
  background-image url('/public/img/block4.jpg')
  background-size cover
  min-height 830px
  p
    font-size 1.3rem
</style>
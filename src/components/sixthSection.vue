<template>
  <v-container class="sixth" fluid>
    <v-layout column align-center class="layoutContainer py-5">
      <h2 class="white--text">Хватит мерзнуть!</h2>
      <p class="white--text">Купите пально inDresser и уже завтра ловите улыбки мужчин.</p>
    </v-layout>
    <v-layout justify-center class="layoutContainer">
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
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
         items: [
          {
            title: 'Оверсайз со спущенным рукавом - пинк',
            price: 2499,
            quantity: 7,
            img: '/public/img/p4.png'
          },
        ]
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
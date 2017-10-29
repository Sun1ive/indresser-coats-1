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
          <div class="price">{{ item.price }}</div>
          <button class="buyButton">Купить</button>
          <div class="quantity">осталось {{ item.quantity }}шт</div>
        </div>
      </v-flex>
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
.third
  min-height 850px
  background-color rgb(240,240,240)
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

.box
  display flex
  flex-direction column
  align-items center
  justify-content center
  background-color #fff
  border 1px solid rgba(#c0c0c0, .4)
  border-radius 8px
  margin 1rem
  img
    max-width 200px
    max-height 200px
    margin 2rem 0
  h3
    font-size 2rem
    line-height 2rem
    text-align center
    font-weight bold
  p
    width 80%
    text-align center
    margin 1rem auto
    font-weight bold
  .border
    width 20%
    margin 0 auto
  .price
    text-align center
    color red
    margin 1rem 0
    font-weight bold
  .buyButton
    background-color red
    border-radius 7px
    padding 0.3rem 1rem
    color #fff
    display block
    margin 0 auto
  .quantity
    color #c0c0c0
    margin 1rem auto
    text-align center



.border
  height 1px
  width 100%
  background-color #333
  opacity .3
</style>
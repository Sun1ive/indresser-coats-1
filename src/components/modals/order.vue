<template>
  <v-container class="order">
    <v-layout justify-center class="formContainer">
      <v-flex class="orderTable text-xs-center" xs12>
        <img :src="currentItem.img" :alt="currentItem.title">
        <div class="ml-3">
          <h2>Пальто inDresser</h2>
          <h3>{{ currentItem.title }}</h3>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="formContainer">
      <form action="" class="form">
          <h3>Кол-во</h3>
        <div class="quantity">
          <div @click="decrement" class="mr-2 but">-</div><div>{{ count }}</div><div @click="count++" class="ml-2 but">+</div>
        </div>
        <v-select v-model="userOrder.size" :items="sizes" label="Выберите размер"></v-select>
        <h3>Заполните форму:</h3>
        <v-text-field label="Имя" required type="text"></v-text-field>
        <v-text-field label="Телефон" required type="number"></v-text-field>
        <v-text-field label="Электронная почта" required type="email"></v-text-field>
        <button class="buyButton">Купить</button><span class="ml-3">Итого: {{ fullprice }} грн</span>
      </form>
    </v-layout>
    <div class="close" @click="close"></div>
  </v-container>
</template>

<script>
  export default {
    props: ['currentItem'],
    data () {
      return {
        count: 1,
        colors: ['Красный', 'Красный', 'Красный', 'Красный'],
        sizes: ['XS', 'S', 'M', 'L'],
        userOrder: {
          size: '',
        }
      }
    },
    methods: {
      close () {
        this.$emit('closeModal')
      },
      decrement () {
        if (this.count <= 1) {
          this.count = 1
        } else {
          this.count--;
        }
      }
    },
    computed: {
      fullprice () {
        return this.currentItem.price * this.count
      }
    }
  }
</script>

<style scoped lang="stylus">
.close
  background-image url('/public/img/close.svg')
  width 40px
  height 40px
  position absolute
  top 5%
  right 2%
  cursor pointer


.formContainer
  max-width 550px
  margin 0 auto

.orderTable
  display flex
  padding 2rem
  border-radius 10px

.form
  min-width 450px
  .quantity
    display flex
    font-size 2rem
    .but
      cursor pointer
    

.order
  background-color #fff
  min-height 500px
  border-radius 10px
  position relative
  img
    max-width 100px
    max-height 100px
    border 3px solid #fff
    box-shadow 1px 1px 1px #333
    border-radius 50%
  h3
    font-size 1.5rem
    line-height 2rem
    margin-bottom 0
  h2
    font-size 2rem
    margin-bottom 0
    line-height 2rem

.buyButton
  background-color red
  border-radius 7px
  padding 0.3rem 1rem
  color #fff
</style>
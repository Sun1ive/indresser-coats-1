<template>
  <v-container class="order">
    <v-layout justify-center class="formContainer">
      <v-flex class="orderTable text-xs-center" xs12>
        <img :src="currentItem.img" :alt="currentItem.title">
        <div class="headers ml-3">
          <h2>Пальто</h2>
          <h3>{{ currentItem.title }}</h3>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="formContainer">
      <!-- <form action="/public/php/mail.php" method="POST" class="form"> -->
      <form class="form" @submit.prevent="submit">
        <h3>Заполните форму:</h3>
        <v-text-field v-model="userData.name" name="name" label="Имя" required type="text"></v-text-field>
        <v-text-field v-model="userData.phone" name="phone" label="Телефон" required type="number"></v-text-field>
        <v-text-field v-model="userData.email" name="email" label="Электронная почта" required type="email"></v-text-field>
        <button class="buyButton">Заказать</button>
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
        userData: {
          name: '',
          phone: '',
          email: '',
          order: {}
        }
      }
    },
    methods: {
      close () {
        this.$emit('closeModal')
      },
      submit () {
        this.userData.order = this.currentItem
        // console.log(this.userData.order);
        Email.send(
        'coats@indresser.com',
        'info@indresser.com',
        'Заказ с сайта coats.indresser.com',
        `Пользователь: ${this.userData.name}\n
        заказал: ${this.userData.order.title}\n
        Телефон: ${this.userData.phone}\n
        почта: ${this.userData.email}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t');
        alert(`Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`)
        this.userData = {
          name: '',
          phone: '',
          email: '',
          order: {}
        }
        this.$emit('closeModal')
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
  min-width 25vh
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

@media (max-width 450px)
  .order
    .headers
      margin-left 0.5rem !important
    h2
      font-size 1.7rem
    h3
      font-size 1.2rem
</style>
<template>
  <v-container fluid class="order">
    <v-layout>
      <v-flex xs12 class="orderTable" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.title">
        <div class="headers">
          <h3>{{ item.name }}</h3>
          <h2 class="red--text">{{ item.title }}</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="formContainer">
      <form class="form" @submit.prevent="submit">
        <h3>Заполните форму:</h3>
        <v-text-field v-model="userData.name" label="Имя" required type="text"></v-text-field>
        <v-text-field v-model="userData.phone" label="Телефон" required type="number"></v-text-field>
        <button class="buyButton">Заказать</button>
      </form>
    </v-layout>
    <div class="close" @click="close"></div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            name: 'При покупке пальто',
            title: 'получите скидку 30%',
            img: '/public/img/p4.png',
          },
        ],
        userData: {
          name: '',
          phone: ''
        }
      }
    },
    methods: {
      close () {
        this.$emit('closeModal')
      },
      submit () {
        this.userData.order = this.currentItem
        Email.send(
        'coats@indresser.com',
        'info@indresser.com',
        'Заказ на скидку с сайта coats.indresser.com',
        `Пользователь: ${this.userData.name}\n
        Телефон: ${this.userData.phone}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t');
        alert(`Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`)
        this.userData = {
          name: '',
          phone: '',
        }
        this.$emit('closeModal')
      } 
    },
  }
</script>

<style scoped lang="stylus">
@import '../../stylus/order.styl'

.order
  min-height 400px
</style>
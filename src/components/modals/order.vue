<template>
  <v-container class="order">
    <v-layout justify-center class="formContainer">
      <v-flex class="orderTable text-xs-center" xs12>
        <img :src="currentItem.img" :alt="currentItem.title">
        <div class="headers">
          <h2>{{ currentItem.name }}</h2>
          <h3>{{ currentItem.title }}</h3>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="formContainer">
      <form class="form" @submit.prevent="submit">
        <h3>Заполните форму:</h3>
        <v-select :items="sizes" v-model="userData.size" label="Выберите размер"></v-select>
        <v-text-field v-model="userData.name" name="name" label="Имя" required type="text"></v-text-field>
        <v-text-field v-model="userData.phone" name="phone" label="Телефон" required type="number"></v-text-field>
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
          size: '',
          order: {}
        },
        sizes: ['XS','S','M','L']
      }
    },
    methods: {
      close () {
        this.$emit('closeModal')
      },
      submit () {
        this.userData.order = this.currentItem
        Email.send(
        `${this.userData.name}`,
        'info@indresser.com',
        'Заказ с сайта coats.indresser.com',
        `Пользователь: ${this.userData.name}\n
        заказал: ${this.userData.order.title}\n
        Телефон: ${this.userData.phone}\n
        Размер: ${this.userData.size}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t');
        alert(`Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`)
        this.userData = {
          name: '',
          phone: '',
          size: '',
          order: {},
        }
        this.$emit('closeModal')
      } 
    }
  }
</script>

<style scoped lang="stylus">
@import '../../stylus/order.styl'

</style>
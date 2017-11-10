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
      <v-flex xs8>
        <form class="form" @submit.prevent="submit">
        <v-select :items="sizes" v-model="userData.size" label="Выберите размер"></v-select>
        <v-text-field v-model="userData.name" label="Имя" required type="text"></v-text-field>
        <v-text-field v-model="userData.phone" label="Телефон" required type="text"></v-text-field>
        <button class="buyButton">Заказать</button>
      </form>
      </v-flex>
    </v-layout>
    <div class="close" @click="close"></div>

    <v-dialog v-model="drawer" max-width="500">
      <app-thanks @closeThanks="closeThanks"></app-thanks>
    </v-dialog>
  </v-container>
</template>

<script>
import thanks from './thanks'

export default {
  props: {
    currentItem: Object,
  },
  components: {
    'app-thanks': thanks,
  },
  data() {
    return {
      drawer: false,
      userData: {
        name: '',
        phone: '',
        size: '',
        order: {}
      },
      sizes: ['XS', 'S', 'M', 'L']
    };
  },
  methods: {
    closeThanks() {
      this.drawer = false;
    },
    close() {
      this.$emit('closeModal');
    },
    submit() {
      this.userData.order = this.currentItem;
      const validate = new RegExp('^[0-9]+$');

      if (validate.test(this.userData.phone)) {
        Email.send(
          `coats@indresser.com`,
          // 'info@indresser.com',
          'sunliveua@gmail.com',
          'Заказ с сайта coats.indresser.com',
          `Пользователь: ${this.userData.name}\n
          заказал: ${this.userData.order.title}\n
          Телефон: ${this.userData.phone}\n
          Размер: ${this.userData.size}`,
          'mail.adm.tools',
          'coats@indresser.com',
          '3DLao3x1AC8t'
        );
        this.userData = {
          name: '',
          phone: '',
          size: '',
          order: {}
        };

        this.drawer = true;
        this.$emit('closeModal');
      } else {
        alert('Введите корректный номер телефона');
        this.userData.phone = '';
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/order.styl'

</style>
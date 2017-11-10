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
     <v-flex xs9>
      <form class="form" @submit.prevent="submit">
        <h3>Заполните форму:</h3>
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
  components: {
    'app-thanks': thanks,
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          name: 'При покупке пальто',
          title: 'получите скидку 30%',
          img: '/public/img/p4.png'
        }
      ],
      userData: {
        name: '',
        phone: ''
      }
    };
  },
  methods: {
    close() {
      this.$emit('closeModal');
    },
    closeThanks() {
      this.drawer = false;
    },
    submit() {
      this.userData.order = this.currentItem;
      const validate = new RegExp('^[0-9]+$');
      if (validate.test(this.userData.phone)) {
      Email.send(
        'coats@indresser.com',
        'info@indresser.com',
        'Заказ на скидку с сайта coats.indresser.com',
        `Пользователь: ${this.userData.name}\n
        Телефон: ${this.userData.phone}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );
      this.userData = {
        name: '',
        phone: ''
      };
      this.drawer = true;
      this.$emit('closeModal');
      } else {
        alert('Введите корректный номерт телефона');
        this.userData.phone = '';
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/order.styl';

.order {
  min-height: 400px;
}
</style>
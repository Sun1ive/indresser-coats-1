import Vue from 'vue';
import './stylus/main.styl';
import VueScroll from 'vue-scrollto';
import {
  Vuetify,
  VApp,
  VCarousel,
  VParallax,
  VGrid,
  VDialog,
  VForm,
  VTextfield,
  transitions,
} from 'vuetify';
import App from './App.vue';

Vue.use(Vuetify, {
  components: {
    VApp,
    VCarousel,
    VParallax,
    VGrid,
    VDialog,
    VForm,
    VTextfield,
    transitions,
  },
});
Vue.use(VueScroll, {
  container: 'body',
  duration: 500,
  offset: 50,
  cancelable: true,
  easing: 'linear',
});

new Vue({
  el: '#app',
  render: h => h(App),
});

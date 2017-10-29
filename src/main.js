import Vue from 'vue'
import './stylus/main.styl'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VGrid,
  transitions
} from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VGrid,
    transitions
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

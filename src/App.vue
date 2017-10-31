<template>
  <v-app>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>

    <v-dialog v-model="stock" max-width="600">
      <app-stock @closeModal="closeModal"></app-stock>
    </v-dialog>
    
    <app-scrollTop></app-scrollTop>
  </v-app>
</template>

<script>
import header from './components/header'
import main from './components/main'
import footer from './components/footer'
import scrollTop from './components/widgets/scrollTop'
import stock from './components/modals/stock'


  export default {
    components: {
      'app-header': header,
      'app-main': main,
      'app-footer': footer,
      'app-scrollTop': scrollTop,
      'app-stock': stock,
    },
    data () {
      return {
        stock: false
      }
    },
    methods: {
      closeModal () {
        this.stock = false
      }
    },
    mounted () {
      setTimeout (() => {
        this.stock = true
      }, 15000)
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

body
  font-family CharterC, Arial, Helvetica, sans-serif
</style>

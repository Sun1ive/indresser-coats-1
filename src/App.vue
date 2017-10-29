<template>
  <v-app>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>

    <app-scrollTop></app-scrollTop>
  </v-app>
</template>

<script>
import header from './components/header'
import main from './components/main'
import footer from './components/footer'
import scrollTop from './components/widgets/scrollTop'


  export default {
    components: {
      'app-header': header,
      'app-main': main,
      'app-footer': footer,
      'app-scrollTop': scrollTop,
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

body
  font-family CharterC, Arial, Helvetica, sans-serif
</style>

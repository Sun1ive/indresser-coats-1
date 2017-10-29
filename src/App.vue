<template>
  <v-app>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import header from './components/header'
import main from './components/main'
import footer from './components/footer'


  export default {
    components: {
      'app-header': header,
      'app-main': main,
      'app-footer': footer,
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

<template>
  <v-app>
    <app-header></app-header>
    <app-main></app-main>
  </v-app>
</template>

<script>
import header from './components/header'
import main from './components/main'


  export default {
    components: {
      'app-header': header,
      'app-main': main,
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

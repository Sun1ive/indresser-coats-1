<template>
  <v-app>
    <app-header></app-header>
  </v-app>
</template>

<script>
import header from './components/header'
  export default {
    components: {
      'app-header': header,
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

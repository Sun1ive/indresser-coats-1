<template>
  <main>
    <app-first></app-first>
    <app-second></app-second>
    <app-third></app-third>
    <app-fourth></app-fourth>
    <app-fifth></app-fifth>
  </main>
</template>

<script>
import first from './firstSection'
import second from './secondSection'
import third from './thirdSection'
import fourth from './fourthSection'
import fifth from './fifthSection'

  export default {
    components: {
      'app-first': first,
      'app-second': second,
      'app-third': third,
      'app-fourth': fourth,
      'app-fifth': fifth,
    },
  }
</script>

<style scoped>
</style>
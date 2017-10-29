<template>
  <main>
    <section class="fisrt">
      <app-first></app-first>
    </section>
      <app-second></app-second>
    <section class="third">
      <app-third></app-third>
    </section>
  </main>
</template>

<script>
import first from './firstSection'
import second from './secondSection'
import third from './thirdSection'

  export default {
    components: {
      'app-first': first,
      'app-second': second,
      'app-third': third,
    },
  }
</script>

<style scoped>
</style>
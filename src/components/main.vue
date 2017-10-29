<template>
  <main>
    <section class="fisrt">
      <app-first></app-first>
    </section>
      <app-second></app-second>
    <section class="third">
      <app-third></app-third>
    </section>
    <section>
      <app-fourth></app-fourth>
    </section>
  </main>
</template>

<script>
import first from './firstSection'
import second from './secondSection'
import third from './thirdSection'
import fourth from './fourthSection'

  export default {
    components: {
      'app-first': first,
      'app-second': second,
      'app-third': third,
      'app-fourth': fourth,
    },
  }
</script>

<style scoped>
</style>
<template>
  <main>
    <section class="fisrt">
      <app-first></app-first>
    </section>
    <section class="second">
      <app-second></app-second>
    </section>
  </main>
</template>

<script>
import first from './firstSection'
import second from './secondSection'

  export default {
    components: {
      'app-first': first,
      'app-second': second,
    },
  }
</script>

<style scoped>

</style>
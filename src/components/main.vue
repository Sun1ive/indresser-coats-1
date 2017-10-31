<template>
  <main>
    <app-first></app-first>
    <app-second></app-second>
    <app-third></app-third>
    <app-fourth></app-fourth>
    <app-fifth></app-fifth>
    <app-video></app-video>
    <app-sixth></app-sixth>
  </main>
</template>

<script>
import first from './firstSection'
import second from './secondSection'
import third from './thirdSection'
import fourth from './fourthSection'
import fifth from './fifthSection'
import video from './video'
import sixth from './sixthSection'

  export default {
    components: {
      'app-first': first,
      'app-second': second,
      'app-third': third,
      'app-fourth': fourth,
      'app-video': video,
      'app-fifth': fifth,
      'app-sixth': sixth,
    },
  }
</script>

<style scoped>
</style>
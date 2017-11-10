<template>
  <v-container class="carouselSlider">
    <v-carousel hide-controls>
      <v-carousel-item ref="cItem" v-for="(item, i) in slider" :key="i" :src="item"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  export default {
    props: ['currentItem'],
    computed: {
      slider () {
        return this.currentItem.slider
      }
    }
  }
</script>

<style scoped lang="stylus">
.carouselSlider
  min-height 500px
  min-width 375px
  .carousel
    height 85vh

@media (max-width: 600px)
  .carouselSlider
    min-width 350px
    min-height 350px

@media (max-width 400px)
  .carouselSlider
    min-width 250px
    min-height 300px
    .carousel
      height 75vh

</style>
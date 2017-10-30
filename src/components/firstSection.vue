<template>
  <v-container fluid class="first">
    <v-layout class="layoutContainer" align-center justify-start>
      <v-flex xs11 sm10 md8 lg7>
        <div class="caption">
          <h2>Пальто оверсайз</h2>
          <p>со спущенным рукавом</p>
        </div>
        <p class="text">Уникальная вещь, которая не просто подчеркнет женственность, но еще и согреет этой холодной осенью. В чем же секрет этого незаменимого предмета гардероба?</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.first
  background-image url('/public/img/2section.jpg')
  background-color #fff
  background-size cover
  background-repeat no-repeat
  height 675px
  .layoutContainer
    height inherit
    .caption
      border-left 7px solid #A14F26
      padding-left 2rem
      margin-bottom 1.5rem
      color #A14F26
      h2
        line-height 4rem
      p
        font-size 2rem
  .text
    font-size 1.1rem
    font-weight bold

@media (max-width: 850px)
  .first
    background-position 50% 100%
    .layoutContainer
      justify-content center
    .text
      text-align center
    
@media (max-width: 500px)
  .first
    background-image url('/public/img/2sectionOp.jpg')
    background-position 81% 100%
</style>
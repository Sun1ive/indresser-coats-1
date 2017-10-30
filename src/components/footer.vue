<template>
  <footer>
    <v-container fluid class="footer">
      <v-layout align-center justify-center class="layoutContainer pt-3">
        <h3>Остались вопросы?</h3>
      </v-layout>
      <v-layout justify-center align-center class="test layoutContainer">
        <v-flex xs12 sm6 lg3 class="text-xs-center Info">Звоните: 098-02-02-092</v-flex>
        <v-flex xs12 sm6 lg3 class="text-xs-center Info">Пишите: info@indresser.com</v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>

<style scoped lang="stylus">
.footer
  background-color #000
  color #fff
  min-height 150px
  .Info
    border-bottom 1px solid #fff
    font-size 1.2rem
    margin 0 1rem
    margin-bottom 2rem

@media (max-width 500px)
  .test
    flex-direction column
    .flex
      margin 1rem 0
</style>
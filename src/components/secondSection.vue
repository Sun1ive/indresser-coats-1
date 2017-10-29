<template>
  <v-container class="second" fluid>
    <v-layout class="layoutContainer pt-5" justify-center>
      <h2 class="head">Почему оно такое классное?</h2>
    </v-layout>
    <v-layout column class="my-5 layoutContainer">
      <v-flex xs12 class="box">
        <img src="/public/img/p1.png" alt="p1">
        <div>
          <h3>Любовь в каждой детали</h3>
          <p>Натуральная шерсть защитит от ветра, плотные нити придадут долговечности, а профессиональная работа мастера соединит все воедино. Благодаря этому вещь служит долго и не выцветает.</p>
        </div>
      </v-flex>
      <v-flex xs12 class="box">
        <div>
          <h3>Любовь в каждой детали</h3>
          <p>Натуральная шерсть защитит от ветра, плотные нити придадут долговечности, а профессиональная работа мастера соединит все воедино. Благодаря этому вещь служит долго и не выцветает.</p>
        </div>
        <img src="/public/img/p2.png" alt="p1">
      </v-flex>
      <v-flex xs12 class="box">
        <img src="/public/img/p3.png" alt="p1">
        <div>
          <h3>Любовь в каждой детали</h3>
          <p>Натуральная шерсть защитит от ветра, плотные нити придадут долговечности, а профессиональная работа мастера соединит все воедино. Благодаря этому вещь служит долго и не выцветает.</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.second
  background-color #ffeed3
  min-height 1050px
  .box
    display flex
    align-items center
    margin 2rem 0
    div
      margin-left 3.3rem
      h3
        font-size 3rem
        border-left 10px solid #A14F26
        padding-left 1.5rem
        line-height 3rem
      p
        // width 75%
        font-size 1.1rem
        font-family CharterC-Bold, Arial, Helvetica, sans-serif
    img
      max-width 230px
      max-height 230px
</style>
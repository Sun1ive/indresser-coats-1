<template>
  <v-container class="second" fluid>
    <v-layout class="layoutContainer pt-5" justify-center>
      <h2 class="head">Почему оно такое классное?</h2>
    </v-layout>
    <v-layout column class="my-5 layoutContainer">
      <v-flex xs11 class="box" v-for="(item,i) in advantages" :key="i">
        <img :src="item.img" alt="p1">
        <div class="textWrapper">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () { 
      return {
        advantages: [
          {
            title: 'Любовь в каждой детали',
            img: '/public/img/p1.png',
            text: 'Натуральная шерсть защитит от ветра, плотные нити придадут долговечности, а профессиональная работа мастера соединит все воедино. Благодаря этому вещь служит долго и не выцветает.'
          },
          {
            title: 'Мужчины оборачиваются',
            img: '/public/img/p2.png',
            text: 'Пальто Оверсайз - незаменимая вещь в гардеробе каждой девушки с хорошим вкусом. Оно идеально сочетается с другой одеждой, дарит тепло и демонстрирует окружающим хорошее чувство вкуса хозяйки. Мужчины сразу замечают таких девушек и хотят познакомиться.'
          },
          {
            title: 'Выбор умных девушек',
            img: '/public/img/p3.png',
            text: 'Мы вас любим, это не пустой звук. Покупая такое пальто вы экономите деньги, не переплачиваете за бренд, а самые внимательные еще и получают скидку.'
          },
        ]
      }
    }
  }
</script>



<style scoped lang="stylus">
.second
  background-image url('/public/img/block0.jpg')
  background-size cover
  min-height 1050px
  .box
    display flex
    align-items center
    margin 2rem 0
    &:nth-child(2)
      flex-direction row-reverse
    .textWrapper
      margin-left 3.3rem
      h3
        font-size 3rem
        border-left 10px solid #A14F26
        padding-left 1.5rem
        line-height 3rem
      p
        font-size 1.1rem
        font-family CharterC-Bold, Arial, Helvetica, sans-serif
    img
      max-width 230px
      max-height 230px

@media (max-width: 800px)
  .second
    min-height 500px
    .box
      img
        max-width 170px
        max-height 170px
      .textWrapper
        margin-left 2rem
        h3
          font-size 2.3rem
        p
          font-size 1rem

@media (max-width: 500px)
  .second
    .layoutContainer
      justify-content center
    .box
      flex-direction column
      &:nth-child(2)
        flex-direction column

@media (max-width: 400px)
  .second
    .box
      .textWrapper
        h3
          font-size 2rem
</style>
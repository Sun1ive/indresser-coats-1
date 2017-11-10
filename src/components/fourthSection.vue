<template>
  <v-container class="fourth" fluid>
    <v-layout column justify-center align-center class="layoutContainer pt-5">
      <h2 class="head">Подробности</h2>
      <div class="text text-xs-center text-sm-left mt-2">о пальто свободного кроя с приспущенным рукавом</div>
    </v-layout>
    <v-layout column align-center justify-center class="my-3">
      <div class="colors">Цвета</div>
      <ul>
        <li>
          <div class="bej"></div>
        </li>
        <li>
          <div class="darkGreen"></div>
        </li>
        <li>
          <div class="blued"></div>
        </li>
      </ul>
    </v-layout>
    <v-layout column align-center justify-center class="my-3">
      <div class="composition">Состав</div>
      <v-layout row>
        <div class="comp" v-for="(item, i) in comp" :key="i">
          <div class="percent">{{ item.percent }}%</div>
          <div class="name">{{ item.name }}</div>
        </div>
      </v-layout>
    </v-layout>
    <v-layout style="min-height: 250px" align-end>
      <v-flex xs12 class="brownBG">
        <div>
          <img src="/public/img/p5.png" alt="coat">
          <p>Над каждым элементом мастер работает вручную. Контроль качества производится перед и после стадии работы, что исключает брак и неточности в размерах.</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        comp: [
          {
            percent: 30,
            name: 'шерсть'
          },
          {
            percent: 40,
            name: 'вискоза'
          },
          {
            percent: 30,
            name: 'полиэстер'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
.fourth
  background-image url('/public/img/block3.jpg')
  background-size cover
  background-repeat no-repeat
  height 890px
  .text
    font-size 2.5rem
  .colors
  ul
    display flex
    margin 1rem 0
    li
      list-style none
      margin 0 .5rem
      div
        width 70px
        height 70px
        border-radius 50%
        border 5px solid #fff
        background-color green
        box-shadow 1px 1px 1px #c0c0c0
      .bej
        background-color #605145
      .darkGreen
        background-color #1e2921
      .blued
        background-color #273d37
  .comp
    margin 0 2rem
    text-align center
    .percent
      font-size 2rem
      font-weight bold
    .name
      font-size 1.2rem

.colors
.composition
  position relative
  &:before
    content ''
    position absolute
    border 1px solid #c0c0c0
    width 250px
    top 50%
    right 100%
    margin-right 1rem
  &:after
    content ''
    position absolute
    border 1px solid #c0c0c0
    width 250px
    top 50%
    left 100%
    margin-left 1rem

.brownBG
  background-color #A14F26
  min-height 150px
  position relative
  img
    max-width 220px
    max-height 220px
  div
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    display flex
    align-items center
  p
    margin-left 2rem
    font-size 1.3rem
    color #fff

@media (max-width 900px)
  .brownBG
    min-height 100px
    div
      left 50%
      width 100%
    img
      max-width 150px
      max-height 150px



@media (max-width 700px)
  .fourth
    .text
      font-size 1.8rem
      margin 1rem 0
  .brownBG
    p
      font-size .9rem
      margin-left 0rem
      padding 1rem
  .colors
  .composition
    &:before
    &:after
      width 150px



@media (max-width 500px)
  .fourth
    .comp
      margin 0 1rem
      .percent
        font-size 2.5rem
      .name
        font-size 1.1rem
  .brownBG
    p
      font-size .8rem
      line-height 1rem
  .colors
  .composition
    &:before
    &:after
      width 100px

@media (max-width 400px)
  .fourth
    .comp
      .percent
        font-size 2rem
      .name
        font-size 1rem
    ul
      li
        width 50px
        height 50px
  .colors
  .composition
    &:before
    &:after
      width 80px
</style>
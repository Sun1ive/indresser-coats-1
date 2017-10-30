<template>
  <v-container class="fifth" fluid>
    <v-layout column align-center justify-center class="layoutContainer py-4">
      <h2 class="mb-2">Отзывы</h2>
      <p>Нет большей награды чем увидеть еще одну девушку в нашем пальто. Спасибо за потрясающий фидбек.</p>
    </v-layout>
    <v-layout column class="layoutContainer pb-5 my-5" justify-center align-center>
      <div class="review" v-for="(item, i) in reviews" :key="i">
        <img class="firstQuote" src="/public/img/dot.png" alt="quote">
        <div>{{ item.text }}</div>
        <span>{{ item.name }}, {{ item.age }} года</span>
        <img class="secondQuote" src="/public/img/dot.png" alt="quote">
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        reviews: [
          {
            name: 'Наталья',
            age: 22,
            text: 'А мне повезло, я успела купить темную версию еще в августе, подготовилась). Жаль конечно, что тогда скидок не было. Ребята вообще умнички, скидывают не на ерунду всякую, а на хорошие вещи.'
          },
          {
            name: 'Стася',
            age: 19,
            text: 'Пальто из очень приятных материалов, давно такое себе хотела, подруга себе такое же будет скоро покупать, только на весну.'
          },
          {
            name: 'Саша',
            age: 33,
            text: 'Я в этом магазине покупала платье красное летом, теперь пальто, радует что бренд развивающийся ну с очень приятными ценами. Успехов Вам.'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
.fifth
  background-color #c0c0c0 + 85%
  min-height 500px
  .layoutContainer
    p
      font-size 1.3rem
      width 80%
      text-align center
    .review
      width 70%
      font-size 1.3rem
      line-height 2rem
      font-family CharterC-Italic, Arial, Helvetica, sans-serif
      min-height 200px
      position relative
      .firstQuote
      .secondQuote
        position absolute
        max-width 120px
        max-height 100px
      .secondQuote
        top 50%
        right 0
        transform translate(0%, -50%)
      .firstQuote
        top 0%
        left 0
        transform translate(-50%, 0%)
      span
        width 100%
        display block
        text-align right

@media (max-width 500px)
  .fifth .layoutContainer p
    font-size 1.1rem
  .fifth .layoutContainer .review
    font-size 1.1rem
</style>
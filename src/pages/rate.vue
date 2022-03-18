

<template>
  <h1>你的评分是 {{ score }}</h1>
  <!-- <Rate :value="score" /> -->
  <!-- 1<value<5 -->
  <!-- <Rate :value="2" theme="red"></Rate>
  <Rate :value="3" theme="green"></Rate> -->
  <Rate :value="score" @update-rate="update"></Rate>
</template>

<script setup>
// import Rate from '../components/Rate.vue'
import Rate from '../components/Rate2.vue'
import { ref } from 'vue'
let score = ref(2.5)
function update(num) {
  score.value = num;
}
</script>
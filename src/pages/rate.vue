

<template>
  <h1>星星页面</h1>
  <!-- <Rate :value="score" /> -->
  <!-- 1<value<5 -->
  <Rate :value="2" theme="red"></Rate>
  <Rate :value="3" theme="green"></Rate>
</template>

<script setup>
// import Rate from '../components/Rate.vue'
import Rate from '../components/Rate1.vue'
import { ref } from 'vue'
let score = ref(2.5)
function update(num) {
  score.value = num;
}
</script>
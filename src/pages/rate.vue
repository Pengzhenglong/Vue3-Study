

<template>
  <h1>星星页面</h1>
  <Rate :value="score" />
</template>

<script setup>
import Rate from '../components/Rate.vue'
import { ref } from 'vue'
let score = ref(2.5)
function update(num) {
  score.value = num;
}
</script>
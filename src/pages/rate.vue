

<template>
  <h1>星星页面</h1>
  <Rate :value="score" />
  <Rate1 :value="score" theme="red"></Rate1>
</template>

<script setup>
import Rate from '../components/Rate.vue'
import Rate1 from '../components/Rate1.vue'
import { ref } from 'vue'
let score = ref(2.5)
function update(num) {
  score.value = num;
}
</script>
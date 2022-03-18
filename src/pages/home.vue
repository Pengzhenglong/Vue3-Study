

<template>
  <router-link to="/">首页</router-link> |
  <router-link to="/about">关于</router-link>
  <router-link to="/rate"> |star</router-link>
  <h1>这是首页</h1>
  <TodoList />
</template>

<script setup>
import TodoList from '../components/TodoList.vue'
</script>
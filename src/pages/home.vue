

<template>
  <router-link to="/">首页</router-link> |
  <router-link to="/about">关于</router-link>
  <router-link to="/rate"> |star</router-link>
  <router-link to="/animation"> |动画页面</router-link>
  <router-link to="/transition"> |Vue动画</router-link>
  <router-link to="/vuex"> |Vuexdemo</router-link>
  <h1>这是首页</h1>
  <TodoList />
</template>

<script setup>
import TodoList from '../components/TodoList.vue'
</script>
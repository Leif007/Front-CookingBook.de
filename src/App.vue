<script setup lang="ts">
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <Header />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: black;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: 'Segoe UI', sans-serif;
}

#app {
  margin: 0;
  padding: 0; /* nur falls du kein Padding brauchst */
}

</style>

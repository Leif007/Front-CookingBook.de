<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <h1>CookingBook.de</h1>
    <nav>
      <RouterLink to="/">Rezepte</RouterLink>
      <RouterLink to="/add">Rezept hinzufügen</RouterLink>
    </nav>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

nav a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

.content {
  padding: 2rem;
}
</style>

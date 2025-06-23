<template>
  <header class="header">
    <div class="header-inner">
      <h1>🍽️ CookingBook.de</h1>
      <nav>
        <RouterLink to="/">Startseite</RouterLink>
        <RouterLink to="/rezepte">Rezepte</RouterLink>
        <RouterLink to="/add">Rezept hinzufügen</RouterLink>
        <RouterLink to="/about">Über uns</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  width: 100vw; /* Volle Bildschirmbreite */
  background-color: #007bff;
  color: white;
  padding: 1rem 0;
  margin: 0;            /* ← das verhindert extra Abstand */
  box-sizing: border-box; /* ← stellt sicher, dass padding den Header nicht verschiebt */
}


.header-inner {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 2rem; /* Abstand zwischen Logo und Navigation */
}

.header h1 {
  margin: 0;
  white-space: nowrap;
}

nav {
  display: flex;
  gap: 1rem; /* gleichmäßiger Abstand zwischen Links */
}

nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>

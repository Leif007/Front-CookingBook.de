<!-- HomeView.vue -->
<template>
  <section class="home-hero">
    <div class="content-box">
      <h1>🍽️ Willkommen bei CookingBook.de</h1>
      <p class="subtitle">
        Deine persönliche Plattform zum Verwalten, Bearbeiten und Suchen deiner Lieblingsrezepte.
      </p>
      <router-link to="/rezepte" class="cta-button">
        Jetzt Rezepte entdecken
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(to right, #f7f7f7, #e3f2fd);
  min-height: 80vh;
}

.content-box {
  max-width: 800px;
}

h1 {
  font-size: 2.8rem;
  color: #1e88e5;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.25rem;
  color: #444;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #1e88e5;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #1565c0;
}
</style>

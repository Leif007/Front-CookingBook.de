<script setup lang="ts">
import RecipeForm from '@/components/RecipeForm.vue'
</script>

<template>
  <section class="add-recipe-page">
    <div class="form-card">
      <h2>Neues Rezept hinzufügen</h2>
      <p class="intro">
        Fülle das Formular aus, um ein neues Lieblingsgericht zu deiner Sammlung hinzuzufügen.
      </p>

      <RecipeForm />
    </div>
  </section>
</template>

<style scoped>
.add-recipe-page {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

.form-card {
  background-color: #f4f9ff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.form-card h2 {
  margin-bottom: 0.5rem;
  color: #0d47a1;
}

.intro {
  margin-bottom: 1.5rem;
  color: #444;
  font-size: 0.95rem;
}
</style>

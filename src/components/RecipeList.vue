<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  rezepte: {
    id: number
    name: string
    category: string
    cookingTime: number
  }[]
}>()

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <div>
    <!-- Rezeptkarten -->
    <div v-if="rezepte.length > 0" class="recipe-list">
      <div
        v-for="rezept in rezepte"
        :key="rezept.id"
        class="recipe-card"
      >
        <h3>{{ rezept.name }}</h3>
        <p><strong>Kategorie:</strong> {{ rezept.category }}</p>
        <p><strong>Kochzeit:</strong> {{ rezept.cookingTime }} Minuten</p>

        <div class="actions">
          <button @click="emit('edit', rezept)">Bearbeiten</button>
          <button @click="emit('delete', rezept)">Löschen</button>
        </div>
      </div>
    </div>

    <!-- Kein Treffer Hinweis -->
    <div v-else class="keine-treffer">
      <p>❌ Es wurde kein passendes Rezept gefunden.</p>
    </div>
  </div>
</template>

<style scoped>
.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
  padding: 0 1rem;
}

.recipe-card {
  background-color: #e3f2fd; /* helles Blau */
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recipe-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.recipe-card h3 {
  margin-bottom: 0.4rem;
  color: #0d47a1;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

button {
  background-color: #1976d2;
  border: none;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

button:hover {
  background-color: #1565c0;
}

.keine-treffer {
  padding: 1rem;
  border: 1px dashed #aaa;
  text-align: center;
  color: #444;
  background-color: #f8f8f8;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>

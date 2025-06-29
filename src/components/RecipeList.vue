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
    <ul v-if="rezepte.length > 0">
      <li v-for="rezept in rezepte" :key="rezept.id">
        <h3>{{ rezept.name }}</h3>
        <p><strong>Kategorie:</strong> {{ rezept.category }}</p>
        <p><strong>Kochzeit:</strong> {{ rezept.cookingTime }} Minuten</p>

        <button @click="emit('edit', rezept)">Bearbeiten</button>
        <button @click="emit('delete', rezept)">Löschen</button>
      </li>
    </ul>

    <div v-else class="keine-treffer">
      <p>❌ Es wurde kein passendes Rezept gefunden.</p>
    </div>
  </div>
</template>

<style scoped>
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

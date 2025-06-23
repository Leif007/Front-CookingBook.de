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
  <ul>
    <li v-for="rezept in rezepte" :key="rezept.id">
      <h3>{{ rezept.name }}</h3>
      <p><strong>Kategorie:</strong> {{ rezept.category }}</p>
      <p><strong>Kochzeit:</strong> {{ rezept.cookingTime }} Minuten</p>

      <button @click="emit('edit', rezept)">Bearbeiten</button>
      <button @click="emit('delete', rezept)">Löschen</button>
    </li>
  </ul>
</template>

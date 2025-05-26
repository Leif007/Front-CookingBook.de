<script setup lang="ts">
defineProps<{
  rezepte: {
    name: string
    category: string
    cookingTime: number
  }[]
}>()
</script>

<template>
  <ul>
    <li v-for="rezept in rezepte" :key="rezept.name">
      <h3>{{ rezept.name }}</h3>
      <p><strong>Kategorie:</strong> {{ rezept.category }}</p>
      <p><strong>Kochzeit:</strong> {{ rezept.cookingTime }} Minuten</p>
    </li>
  </ul>
</template>

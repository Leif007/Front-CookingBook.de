<script setup lang="ts">
defineProps<{
  rezepte: {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string
  }[]
}>()
</script>

<template>
  <ul>
    <li v-for="rezept in rezepte" :key="rezept.id">
      <h3>{{ rezept.name }}</h3>
      <p><strong>Zutaten:</strong> {{ rezept.ingredients.join(', ') }}</p>
      <p><strong>Zubereitung:</strong> {{ rezept.instructions }}</p>
    </li>
  </ul>
</template>

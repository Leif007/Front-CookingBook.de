<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeList from '@/components/RecipeList.vue'

const gerichte = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://cookingbook-de.onrender.com/gerichte')
    gerichte.value = await res.json()
  } catch (error) {
    console.error('Fehler beim Laden der Gerichte:', error)
  }
})
</script>

<template>
  <main>
    <h1>Gerichte aus der Datenbank</h1>
    <RecipeList :rezepte="gerichte" />
  </main>
</template>

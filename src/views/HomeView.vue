<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeList from '@/components/RecipeList.vue'

const gerichte = ref([])

onMounted(async () => {
  try {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte')
    gerichte.value = await res.json()
  } catch (error) {
    console.error('Fehler beim Laden der Gerichte:', error)
  }
})
</script>

<template>
  <section>
    <h2>Gerichte aus der Datenbank</h2>
    <RecipeList :rezepte="gerichte" />
  </section>
</template>

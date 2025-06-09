<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const category = ref('')
const cookingTime = ref(0)

const submitRecipe = async () => {
  try {
    await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        category: category.value,
        cookingTime: cookingTime.value
      })
    })
    alert('Rezept gespeichert!')
    name.value = ''
    category.value = ''
    cookingTime.value = 0
  } catch (error) {
    alert('Fehler beim Speichern')
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="submitRecipe">
    <label>Name: <input v-model="name" required /></label><br />
    <label>Kategorie: <input v-model="category" required /></label><br />
    <label>Kochzeit (Minuten): <input type="number" v-model.number="cookingTime" required /></label><br />
    <button type="submit">Speichern</button>
  </form>
</template>

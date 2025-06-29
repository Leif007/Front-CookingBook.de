<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const category = ref('')
const cookingTime = ref<number | null>(null)
const errors = ref<string[]>([])

const validateInputs = () => {
  errors.value = []

  if (!name.value.trim()) {
    errors.value.push('❌ Der Name darf nicht leer sein.')
  } else if (/\d/.test(name.value)) {
    errors.value.push('❌ Der Name darf keine Zahlen enthalten.')
  } else if (name.value.trim().length < 3) {
    errors.value.push('❌ Der Name muss mindestens 3 Zeichen lang sein.')
  }

  if (!category.value.trim()) {
    errors.value.push('❌ Die Kategorie darf nicht leer sein.')
  } else if (/\d/.test(category.value)) {
    errors.value.push('❌ Die Kategorie darf keine Zahlen enthalten.')
  }

  if (cookingTime.value === null || isNaN(cookingTime.value)) {
    errors.value.push('❌ Bitte gib eine gültige Kochzeit ein.')
  } else if (cookingTime.value <= 0) {
    errors.value.push('❌ Die Kochzeit muss größer als 0 Minuten sein.')
  }

  return errors.value.length === 0
}

const submitRecipe = async () => {
  if (!validateInputs()) return

  try {
    await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value.trim(),
        category: category.value.trim(),
        cookingTime: cookingTime.value
      })
    })

    alert('✅ Rezept erfolgreich gespeichert!')
    name.value = ''
    category.value = ''
    cookingTime.value = null
  } catch (error) {
    alert('❌ Fehler beim Speichern')
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="submitRecipe" class="form-card">

    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" />
    </div>

    <div>
      <label for="category">Kategorie:</label>
      <input id="category" v-model="category" />
    </div>

    <div>
      <label for="cookingTime">Kochzeit (Minuten):</label>
      <input id="cookingTime" type="number" v-model="cookingTime" />
    </div>

    <button type="submit">💾 Speichern</button>

    <ul v-if="errors.length" class="error-list">
      <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
    </ul>
  </form>
</template>

<style scoped>
.form-card {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f0f8ff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.form-card h3 {
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.form-card div {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #222;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 0.6rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.error-list {
  margin-top: 1rem;
  color: #c0392b;
  background: #ffe5e5;
  padding: 0.8rem;
  border-radius: 8px;
  list-style: none;
}
</style>

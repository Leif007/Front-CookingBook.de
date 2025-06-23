<!-- src/components/EditableRecipeForm.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

type Recipe = {
  id: number
  name: string
  category: string
  cookingTime: number
}

const props = defineProps<{
  initialRecipe: Recipe | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'updated'): void
}>()

const name = ref('')
const category = ref('')
const cookingTime = ref(0)

watch(
  () => props.initialRecipe,
  (r) => {
    if (r) {
      name.value = r.name
      category.value = r.category
      cookingTime.value = r.cookingTime
    }
  },
  { immediate: true }
)

const submitUpdate = async () => {
  if (!props.initialRecipe) return

  try {
    await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte/' + props.initialRecipe.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        category: category.value,
        cookingTime: cookingTime.value
      })
    })

    emit('updated')
    emit('close')
  } catch (err) {
    console.error('Fehler beim Aktualisieren:', err)
    alert('Fehler beim Aktualisieren des Rezepts.')
  }
}
</script>

<template>
  <div class="modal">
    <form @submit.prevent="submitUpdate">
      <h3>Rezept bearbeiten</h3>
      <label>Name: <input v-model="name" required /></label><br />
      <label>Kategorie: <input v-model="category" required /></label><br />
      <label>Kochzeit: <input type="number" v-model.number="cookingTime" required /></label><br />
      <div class="actions">
        <button type="submit">Änderungen speichern</button>
        <button type="button" @click="$emit('close')">Abbrechen</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid #007bff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%;
  max-width: 400px;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>

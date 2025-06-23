<!-- src/components/DeleteRecipeModal.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  recipeId: number
  recipeName: string
}>()

const emit = defineEmits(['close', 'deleted'])

const deleteRecipe = async () => {
  try {
    await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte/' + props.recipeId, {
      method: 'DELETE'
    })
    emit('deleted')
    emit('close')
  } catch (err) {
    alert('Fehler beim Löschen')
    console.error(err)
  }
}
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <h3>Rezept löschen</h3>
      <p>
        Möchtest du <strong>{{ recipeName }}</strong> wirklich löschen?<br />
        Diese Aktion kann <span class="warn">nicht</span> rückgängig gemacht werden.
      </p>
      <div class="actions">
        <button class="delete" @click="deleteRecipe">Ja, löschen</button>
        <button class="cancel" @click="$emit('close')">Abbrechen</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.warn {
  color: #dc3545;
  font-weight: bold;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.delete {
  background-color: #dc3545;
  color: white;
}

.cancel {
  background-color: #6c757d;
  color: white;
}
</style>

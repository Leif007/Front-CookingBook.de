<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeList from '@/components/RecipeList.vue'
import EditableRecipeForm from '@/components/EditableRecipeForm.vue'

type Recipe = { id: number; name: string; category: string; cookingTime: number }

const gerichte = ref<Recipe[]>([])
const showModal = ref(false)
const selectedRecipe = ref<Recipe | null>(null)

const fetchGerichte = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/gerichte')
    gerichte.value = await res.json()
  } catch (error) {
    console.error('Fehler beim Laden der Gerichte:', error)
  }
}

const openEditForm = (rezept: Recipe) => {
  selectedRecipe.value = rezept
  showModal.value = true
}

const closeForm = () => {
  showModal.value = false
  selectedRecipe.value = null
}

onMounted(fetchGerichte)
</script>

<template>
  <section>
    <h2>Gerichte aus der Datenbank</h2>
    <RecipeList :rezepte="gerichte" @edit="openEditForm" />

    <EditableRecipeForm
      v-if="showModal"
      :initial-recipe="selectedRecipe"
      @close="closeForm"
      @updated="() => { closeForm(); fetchGerichte(); }"
    />
  </section>
</template>

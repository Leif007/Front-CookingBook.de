<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeList from '@/components/RecipeList.vue'
import EditableRecipeForm from '@/components/EditableRecipeForm.vue'
import DeleteRecipeModal from '@/components/DeleteRecipeModal.vue' // <- Importieren

type Recipe = { id: number; name: string; category: string; cookingTime: number }

const gerichte = ref<Recipe[]>([])
const showEditModal = ref(false)
const showDeleteModal = ref(false)

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
  showEditModal.value = true
}

const openDeleteModal = (rezept: Recipe) => {
  selectedRecipe.value = rezept
  showDeleteModal.value = true
}

const closeModals = () => {
  showEditModal.value = false
  showDeleteModal.value = false
  selectedRecipe.value = null
}

onMounted(fetchGerichte)
</script>

<template>
  <section>
    <h2>Gerichte aus der Datenbank</h2>

    <RecipeList
      :rezepte="gerichte"
      @edit="openEditForm"
      @delete="openDeleteModal"
    />

    <EditableRecipeForm
      v-if="showEditModal"
      :initial-recipe="selectedRecipe"
      @close="closeModals"
      @updated="() => { closeModals(); fetchGerichte(); }"
    />

    <DeleteRecipeModal
      v-if="showDeleteModal"
      :recipe-id="selectedRecipe?.id!"
      :recipe-name="selectedRecipe?.name!"
      @close="closeModals"
      @deleted="() => { closeModals(); fetchGerichte(); }"
    />
  </section>
</template>

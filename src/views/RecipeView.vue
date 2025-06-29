<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import RecipeList from '@/components/RecipeList.vue'
import EditableRecipeForm from '@/components/EditableRecipeForm.vue'
import DeleteRecipeModal from '@/components/DeleteRecipeModal.vue'
import SearchBar from '@/components/SearchBar.vue'

type Recipe = { id: number; name: string; category: string; cookingTime: number }

const gerichte = ref<Recipe[]>([])
const showModal = ref(false)
const selectedRecipe = ref<Recipe | null>(null)
const showDeleteModal = ref(false)
const deleteTarget = ref<Recipe | null>(null)
const searchQuery = ref('')

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

const openDeleteModal = (rezept: Recipe) => {
  deleteTarget.value = rezept
  showDeleteModal.value = true
}

const filteredGerichte = computed(() =>
  gerichte.value.filter(r =>
    r.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

onMounted(fetchGerichte)
</script>

<template>
  <section>
    <h2>Gerichte aus der Datenbank</h2>

    <!-- 🔍 Suchleiste -->
    <SearchBar v-model="searchQuery" />

    <!-- Rezeptliste -->
    <RecipeList
      :rezepte="filteredGerichte"
      @edit="openEditForm"
      @delete="openDeleteModal"
    />

    <!-- Bearbeiten -->
    <EditableRecipeForm
      v-if="showModal"
      :initial-recipe="selectedRecipe"
      @close="closeForm"
      @updated="() => { closeForm(); fetchGerichte(); }"
    />

    <!-- Löschen -->
    <DeleteRecipeModal
      v-if="showDeleteModal"
      :recipe-id="deleteTarget?.id"
      :recipe-name="deleteTarget?.name"
      @close="() => { showDeleteModal = false }"
      @deleted="() => { showDeleteModal = false; fetchGerichte(); }"
    />
  </section>
</template>

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
    console.error('Fehler beim Laden der Rezepte:', error)
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
  <section class="recipe-view">
    <div class="header-area">
      <h1>Deine Rezepte im Überblick</h1>
      <p class="description">
        Durchsuche, bearbeite oder lösche deine Lieblingsrezepte ganz einfach.
      </p>
    </div>

    <SearchBar v-model="searchQuery" />

    <div v-if="filteredGerichte.length === 0" class="no-results">
      <p>🔍 Keine passenden Rezepte gefunden.</p>
    </div>

    <RecipeList
      v-else
      :rezepte="filteredGerichte"
      @edit="openEditForm"
      @delete="openDeleteModal"
    />

    <EditableRecipeForm
      v-if="showModal"
      :initial-recipe="selectedRecipe"
      @close="closeForm"
      @updated="() => { closeForm(); fetchGerichte(); }"
    />

    <DeleteRecipeModal
      v-if="showDeleteModal && deleteTarget"
      :recipe-id="deleteTarget.id ?? 0"
      :recipe-name="deleteTarget.name ?? ''"
      @close="() => { showDeleteModal = false }"
      @deleted="() => { showDeleteModal = false; fetchGerichte(); }"
    />

  </section>
</template>

<style scoped>
.recipe-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header-area {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.2rem;
  color: #1e88e5;
  margin-bottom: 0.5rem;
}

.description {
  color: #555;
  font-size: 1.1rem;
}

.no-results {
  margin-top: 2rem;
  text-align: center;
  color: #888;
  font-style: italic;
}
</style>

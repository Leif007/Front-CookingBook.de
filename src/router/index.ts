import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'
import RezepteView from '@/views/RecipeView.vue' // 🧠 Falls du die Datei so genannt hast

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddRecipe', component: AddRecipeView },
  { path: '/rezepte', name: 'Rezepte', component: RezepteView }, // 🧠 Diese Zeile muss rein!
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'
import RezepteView from '@/views/RecipeView.vue'
import AboutView from '@/views/AboutView.vue' // 👈 HINZUGEFÜGT

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddRecipe', component: AddRecipeView },
  { path: '/rezepte', name: 'Rezepte', component: RezepteView },
  { path: '/about', name: 'About', component: AboutView } // 👈 NEUE ROUTE
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

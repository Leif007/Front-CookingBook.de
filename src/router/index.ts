import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddRecipe', component: AddRecipeView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

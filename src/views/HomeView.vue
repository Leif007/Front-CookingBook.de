<script setup lang="ts">
import RecipeList from '../components/RecipeList.vue'

const rezepte = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['Spaghetti', 'Hackfleisch', 'Tomatensauce'],
    instructions: 'Alles anbraten, köcheln lassen und servieren.'
  },
  {
    id: 2,
    name: 'Pfannkuchen',
    ingredients: ['Mehl', 'Milch', 'Eier'],
    instructions: 'Zutaten vermischen und in der Pfanne ausbacken.'
  }
]
</script>

<template>
  <main>
    <h1>Meine Rezepte</h1>
    <RouterLink to="/add">➕ Neues Rezept erstellen</RouterLink>
    <RecipeList :rezepte="rezepte" />
  </main>
</template>

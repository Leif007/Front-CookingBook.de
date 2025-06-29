<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="search"
      placeholder="🔎 Nach Rezept suchen..."
      @input="$emit('update:modelValue', search)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const search = ref(props.modelValue)
</script>

<style scoped>
.search-bar {
  margin: 1rem auto;
  max-width: 600px;
  text-align: center;
}

.search-bar input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.search-bar input:focus {
  outline: none;
  border-color: #007bff;
}
</style>

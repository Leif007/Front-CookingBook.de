import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RecipeList from '../RecipeList.vue'

describe('RecipeList.vue', () => {
  it('zeigt alle Rezepte an', () => {
    const mockData = [
      { id: 1, name: 'Pizza', category: 'Italienisch', cookingTime: 30 },
      { id: 2, name: 'Salat', category: 'Vorspeise', cookingTime: 10 }
    ]

    const wrapper = mount(RecipeList, {
      props: { rezepte: mockData }
    })

    expect(wrapper.text()).toContain('Pizza')
    expect(wrapper.text()).toContain('Salat')
  })
})

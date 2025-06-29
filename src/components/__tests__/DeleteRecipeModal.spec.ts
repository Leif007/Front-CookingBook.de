import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DeleteRecipeModal from '@/components/DeleteRecipeModal.vue'

describe('DeleteRecipeModal.vue', () => {
  it('zeigt den Rezeptnamen korrekt an', () => {
    const wrapper = mount(DeleteRecipeModal, {
      props: { recipeId: 1, recipeName: 'Tacos' }
    })

    expect(wrapper.text()).toContain('Tacos')
  })

  it('emit close bei Klick auf Abbrechen', async () => {
    const wrapper = mount(DeleteRecipeModal, {
      props: { recipeId: 1, recipeName: 'Tacos' }
    })

    const cancelButton = wrapper.findAll('button')[1]
    await cancelButton.trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})

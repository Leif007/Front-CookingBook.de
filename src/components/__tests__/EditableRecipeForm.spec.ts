import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EditableRecipeForm from '@/components/EditableRecipeForm.vue'

describe('EditableRecipeForm.vue', () => {
  const mockRecipe = {
    id: 1,
    name: 'Pasta',
    category: 'Italienisch',
    cookingTime: 25
  }

  it('zeigt Initialwerte korrekt an', () => {
    const wrapper = mount(EditableRecipeForm, {
      props: { initialRecipe: mockRecipe }
    })

    const inputs = wrapper.findAll('input')
    expect((inputs[0].element as HTMLInputElement).value).toBe('Pasta')
    expect((inputs[1].element as HTMLInputElement).value).toBe('Italienisch')
  })

  it('emit close Event bei Abbrechen', async () => {
    const wrapper = mount(EditableRecipeForm, {
      props: { initialRecipe: mockRecipe }
    })

    const cancelButton = wrapper.find('button[type="button"]')
    await cancelButton.trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})

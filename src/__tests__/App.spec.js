import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'

describe('App.vue', () => {
  it('點一次按鈕 count 加 1', async () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('0')

    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})

import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import userPage from '@/view/UserPage.vue';

const localVue = createLocalVue();

describe('userPage.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(userPage, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import home from '@/view/Home.vue';

const localVue = createLocalVue();

describe('home.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = mount(home, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import viewOperaHome from '@/components/ViewOperaHome.vue';

const localVue = createLocalVue();

describe('viewOperaHome.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = mount(viewOperaHome, {
      localVue,
      store,
      vuetify,
      propsData: { visiblePage: 'visiblePage' }
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});

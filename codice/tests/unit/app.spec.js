import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import router from '@/router/router';
import store from '@/store';
import app from '@/app.vue';


const localVue = createLocalVue();

describe('app.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(app, {
    localVue,
    router,
    store,
    vuetify,
    mocks: {
      $route: {
        name: {
          id: 'id'
        }
      }
    }
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-app')).toBe(true);
  });
});

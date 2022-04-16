import Vuetify from 'vuetify';
import { shallowMount, createLocalVue} from '@vue/test-utils';
import store from '@/store';
import navBar from '@/components/Navbar.vue';

const localVue = createLocalVue();

describe('navBar.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const factory = (values = {}) => {
    return shallowMount(navBar, {
      data() {
        return {
          isLogged: false,
        }
      },
      localVue,
      store,
      vuetify,
    });
  }
  const wrapper = factory()
  it('Check if content render', () => {
    expect(wrapper.contains('nav')).toBe(true);
  });
  it('Check if divNotLogged is rendered', () => {
    const wrapper = factory({ isLogged: true  })
    expect(wrapper.find('#userLogged').exists()).toBeTruthy();
  });
    it('Check if divNotLogged is not rendered', () => {
    const wrapper = factory({ isLogged: false  })
    expect(wrapper.find('#userLogged').exists()).toBeFalsy();
  });
});

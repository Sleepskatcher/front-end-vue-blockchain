import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import operasList from '@/view/operasList.vue';

const localVue = createLocalVue();

describe('operasList.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(operasList, {
      localVue,
      store,
      vuetify,
      propsData: {
        visiblePage: {
            "id": "Qmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat",
            "title": "Contemporaneità",
            "description": "Opera interessante e contemporanea di grande spessore",
            "authorId": 18,
            "price": 52,
            "currency": "ETH",
            "status": false,
            "path": "gallery/imgQmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat.jpg",
            "type": "video",
            "owner": "Filippo Baggio",
            "author": "Frank Sinatra",
            "categories": [
              {
                "id": 3,
                "name": "food"
              },
              {
                "id": 2,
                "name": "sport"
              }
            ]
        }
      }
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

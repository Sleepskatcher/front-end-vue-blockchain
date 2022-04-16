import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import editOpera from '@/components/editOpera.vue';

const localVue = createLocalVue();

describe('editOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(editOpera, {
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
  it('Check if content render', () => {
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
  it('Check if title is changed after user interaction', ()=>{
    const titleInput = wrapper.find('#titleInput');
    wrapper.find('#titleInput').trigger('click');
    wrapper.find('#titleInput').trigger('input');
    expect(titleInput.element.value).not.toBe('Contemporaneità');
  });
  it('Check if description is changed after user interaction', ()=>{
    const descriptionInput = wrapper.find('#descriptionInput');
    wrapper.find('#descriptionInput').trigger('click');
    wrapper.find('#descriptionInput').trigger('input');
    expect(descriptionInput.element.value).not.toBe('Opera interessante e contemporanea di grande spessore');
  });
  it('Check if price is changed after user interaction', ()=>{
    const priceInput = wrapper.find('#priceInput');
    wrapper.find('#priceInput').trigger('click');
    wrapper.find('#priceInput').trigger('input');
    expect(priceInput.element.value).not.toBe(52);
  });
  it('Check if category is changed after user interaction', ()=>{
    const categoryInput = wrapper.find('#categoryInput');
    wrapper.find('#categoryInput').trigger('click');
    wrapper.find('#categoryInput').trigger('input');
    expect(categoryInput.element.value).not.toBe([{
      "id": 3,
      "name": "food"
    },
    {
      "id": 2,
      "name": "sport"
    }]);
  });
});

import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import uploadOpera from '@/view/UploadOpera.vue';

const localVue = createLocalVue();

describe('uploadOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(uploadOpera, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-container')).toBe(true);
  });
  it('Check if button is disabled with empty fields', () => {
    const titolo = '';
    const descrizione = '';
    const file = '';
    const tipo = '';
    const categories = '';
    const price = '';

    var titleInput = wrapper.find('#titleInput');
    titleInput.element.value = titolo;
    var descriptionInput = wrapper.find('#descriptionInput');
    descriptionInput.element.value = descrizione;
    var fileInput = wrapper.find('#fileInput');
    fileInput.element.value = file;
    var typeInput = wrapper.find('#typeInput');
    typeInput.element.value = tipo;
    var categoriesInput = wrapper.find('#categoriesInput');
    categoriesInput.element.value = categories;
    var priceInput = wrapper.find('#priceInput');
    priceInput.element.value = price;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(
      true
    );
  });
  it('Check if title is changed after user interaction', () =>{
    var titleInput = wrapper.find('#titleInput');
    wrapper.find('#titleInput').trigger('click');
    wrapper.find('#titleInput').trigger('input');
    expect(titleInput.value).not.toBe('');
  });
  it('Check if description is changed after user interaction', () =>{
    var descriptionInput = wrapper.find('#descriptionInput');
    wrapper.find('#descriptionInput').trigger('click');
    wrapper.find('#descriptionInput').trigger('input');
    expect(descriptionInput.value).not.toBe('');
  });
  it('Check if file is changed after user interaction', () =>{
    var fileInput = wrapper.find('#fileInput');
    wrapper.find('#fileInput').trigger('click');
    wrapper.find('#fileInput').trigger('input');
    expect(fileInput.value).not.toBe('');
  });
  it('Check if type is changed after user interaction', () =>{
    var typeInput = wrapper.find('#typeInput');
    wrapper.find('#typeInput').trigger('click');
    wrapper.find('#typeInput').trigger('input');
    expect(typeInput.value).not.toBe('');
  });
  it('Check if category is changed after user interaction', () =>{
    var categoriesInput = wrapper.find('#categoriesInput');
    wrapper.find('#categoriesInput').trigger('click');
    wrapper.find('#categoriesInput').trigger('input');
    expect(categoriesInput.value).not.toBe('');
  });

  it('Check if price is changed after user interaction', () =>{
    var priceInput = wrapper.find('#priceInput');
    wrapper.find('#priceInput').trigger('click');
    wrapper.find('#priceInput').trigger('input');
    expect(priceInput.value).not.toBe('');
  });
});

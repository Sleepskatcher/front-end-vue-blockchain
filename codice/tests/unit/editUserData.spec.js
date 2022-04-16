import Vuetify from 'vuetify';
import { mount, createLocalVue} from '@vue/test-utils';
import store from '@/store';
import editUserData from '@/components/editUserData.vue';

const localVue = createLocalVue();

describe('editUserData.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(editUserData, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
  it('Check if button is disabled with empty fields', () => {
    const name = '';
    const surname = '';
    const dob = '';
    const wallet = '';
    const password = '';

    var nameMInput = wrapper.find('#nameMInput');
    nameMInput.element.value = name;
    var surnameMInput = wrapper.find('#surnameMInput');
    surnameMInput.element.value = surname;
    var dobMInput = wrapper.find('#dobMInput');
    dobMInput.element.value = dob;
    var walletMInput = wrapper.find('#walletMInput');
    walletMInput.element.value = wallet;
    var passwordMInput = wrapper.find('#passwordMInput');
    passwordMInput.element.value = password;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(
      true
    );
  });
  it('Check if button is disabled with empty fields', ()=> {
    const password="";

    var passwordMInput = wrapper.find('#passwordMInput');
    passwordMInput.element.value = password;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(true);
  });
  it('Check if button is disabled with empty fields', ()=> {
    const password="Prova123@";

    var passwordMInput = wrapper.find('#passwordMInput');
    passwordMInput.element.value = password;

    expect(wrapper.vm.isFormValid).toBeTruthy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).toBe(true);
  });
  it('Check if name is changed after user interaction', ()=>{
    const nameMInput = wrapper.find('#nameMInput');
    wrapper.find('#nameMInput').trigger('click');
    wrapper.find('#nameMInput').trigger('input');
    nameMInput.element.value = "Mario";
    expect(nameMInput.element.value).toBe("Mario");
  });
  it('Check if surname is changed after user interaction', ()=>{
    const surnameMInput = wrapper.find('#surnameMInput');
    wrapper.find('#surnameMInput').trigger('click');
    wrapper.find('#surnameMInput').trigger('input');
    surnameMInput.element.value = "Rossi";
    expect(surnameMInput.element.value).toBe("Rossi");
  });
  it('Check if dob is changed after user interaction', ()=>{
    const dobMInput = wrapper.find('#dobMInput');
    wrapper.find('#dobMInput').trigger('click');
    wrapper.find('#dobMInput').trigger('input');
    dobMInput.element.value = "1982-22-12";
    expect(dobMInput.element.value).toBe("1982-22-12");
  });
  it('Check if wallet address is changed after user interaction', ()=>{
    const walletMInput = wrapper.find('#walletMInput');
    wrapper.find('#walletMInput').trigger('click');
    wrapper.find('#walletMInput').trigger('input');
    walletMInput.element.value = "0x50B0107AA7D6465dBddCf60e4BfaEE70D8bC44bE";
    expect(walletMInput.element.value).toBe("0x50B0107AA7D6465dBddCf60e4BfaEE70D8bC44bE");
  });
  it('Check if password is changed after user interaction', ()=>{
    const passwordMInput = wrapper.find('#passwordMInput');
    wrapper.find('#passwordMInput').trigger('click');
    wrapper.find('#passwordMInput').trigger('input');
    passwordMInput.element.value = "Prova@123";
    expect(passwordMInput.element.value).toBe("Prova@123");
  });
});

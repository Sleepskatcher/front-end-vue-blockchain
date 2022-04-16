import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import signUp from '@/view/SignUp.vue';

const localVue = createLocalVue();

describe('signUp.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(signUp, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-container')).toBe(true);
  });
  it('Check if button is disabled with empty fields', ()=> {
    const name="";
    const surname="";
    const email="";
    const dob="";
    const wallet="";
    const password="";
    const confPassword="";

    var nameInput = wrapper.find('#nameInput');
    nameInput.element.value = name;
    var surnameInput = wrapper.find('#surnameInupt');
    surnameInput.element.value = surname;
    var emailInput = wrapper.find('#emailSInput');
    emailInput.element.value = email;
    var dobInput = wrapper.find('#dobInupt');
    dobInput.element.value = dob;
    var walletInput = wrapper.find('#walletInupt');
    walletInput.element.value = wallet;
    var passwordInput = wrapper.find('#passwordSInupt');
    passwordInput.element.value = password;
    var confPasswordInupt = wrapper.find('#confPasswordInupt');
    confPasswordInupt.element.value = confPassword;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(true);
  });
  it('Check if name is changed after user interaction', () =>{
    var nameInput = wrapper.find('#nameInput');
    wrapper.find('#nameInput').trigger('click');
    wrapper.find('#nameInput').trigger('input');
    expect(nameInput.value).not.toBe('');
  });
  it('Check if surname is changed after user interaction', () =>{
    var surnameInput = wrapper.find('#surnameInupt');
    wrapper.find('#surnameInupt').trigger('click');
    wrapper.find('#surnameInupt').trigger('input');
    expect(surnameInput.value).not.toBe('');
  });
  it('Check if email is changed after user interaction', () =>{
    var emailSInput = wrapper.find('#emailSInput');
    wrapper.find('#emailSInput').trigger('click');
    wrapper.find('#emailSInput').trigger('input');
    expect(emailSInput.value).not.toBe('');
  });
  it('Check if dob is changed after user interaction', () =>{
    var dobInupt = wrapper.find('#dobInupt');
    wrapper.find('#dobInupt').trigger('click');
    wrapper.find('#dobInupt').trigger('input');
    expect(dobInupt.value).not.toBe('');
  });
  it('Check if wallet is changed after user interaction', () =>{
    var walletInupt = wrapper.find('#walletInupt');
    wrapper.find('#walletInupt').trigger('click');
    wrapper.find('#walletInupt').trigger('input');
    expect(walletInupt.value).not.toBe('');
  });
  it('Check if password is changed after user interaction', () =>{
    var passwordSInupt = wrapper.find('#passwordSInupt');
    wrapper.find('#passwordSInupt').trigger('click');
    wrapper.find('#passwordSInupt').trigger('input');
    expect(passwordSInupt.value).not.toBe('');
  });
  it('Check if confPassword is changed after user interaction', () =>{
    var confPasswordInupt = wrapper.find('#confPasswordInupt');
    wrapper.find('#confPasswordInupt').trigger('click');
    wrapper.find('#confPasswordInupt').trigger('input');
    expect(confPasswordInupt.value).not.toBe('');
  });
});

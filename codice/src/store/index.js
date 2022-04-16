import Vue from 'vue';
import Vuex from 'vuex';
import CurrentUser from '../store/modules/currentUser.js';
import nftService from '../store/modules/nftService.js';
import createPersistedState from 'vuex-persistedstate';

const userState = createPersistedState({
  paths: ['CurrentUser']
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CurrentUser,
    nftService
  },
  plugins: [userState]
});

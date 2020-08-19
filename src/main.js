import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import config from '../config.js';

Vue.config.productionTip = false;

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: 'evernote-f33da.firebaseapp.com',
  databaseURL: 'https://evernote-f33da.firebaseio.com',
  projectId: 'evernote-f33da',
  storageBucket: 'evernote-f33da.appspot.com',
  messagingSenderId: '398872285362',
  appId: '1:398872285362:web:917da7ec287894624d39ab',
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

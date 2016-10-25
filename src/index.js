import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Home from 'components/Home';
import Contacts from 'components/Contacts';
import Tour from 'components/Tour';



Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/tour',
      component: Tour
    }
  ]
});

new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
});

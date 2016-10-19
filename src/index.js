import 'babel-polyfill';
import Vue from 'vue';

import Home from './Home';
import Contacts from 'components/Contacts';
import Tour from 'components/Tour';

const routes = {
  '/': Home,
  '/contacts': Contacts,
  '/tour': Tour
};

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Home;
    }
  },
  render (h) { return h(this.ViewComponent); }
});

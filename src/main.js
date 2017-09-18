import Vue from 'vue';
import App from './App.vue';
import Rapidate from './components/rapid-date.component.vue';
import Datepicker from 'vuejs-datepicker';

Vue.config.productionTip = false;

/* eslint no-new: "off" */

new Vue({
  el: 'app',
  components: {
    App,
    Rapidate,
    Datepicker
  }
});

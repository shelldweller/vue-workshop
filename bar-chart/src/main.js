import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app/app.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


import qs from 'qs'
Vue.prototype.$qs = qs;

import axios from 'axios'
Vue.prototype.$ajax = axios;
axios.defaults.baseURL = process.env.API_ROOT


import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.use(Vant)

import Vuex from 'vuex'
Vue.use(Vuex)

import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';

import VDistpicker from 'v-distpicker'
Vue.use('v-distpicker',VDistpicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


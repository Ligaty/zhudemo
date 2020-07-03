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

//async-validator表单验证    animate动画
import store from "@/store";
import animate from "animate.css";
import schema from "async-validator";
import dialog from "./utils/dialog";
import $scroll from "@/utils/loading";
import cookie from "@/utils/store/cookie";
import "@/assets/iconfont/iconfont";
import "@/assets/iconfont/iconfont.css";
import "./assets/js/media_750";
import "vue-ydui/dist/ydui.base.css";
import "@/assets/css/base.css";
import "@/assets/css/reset.css";
import "@/assets/css/style.css";
import { isWeixin, parseQuery } from "@/utils";
import vueLazyLoad from "vue-lazyload";
import { Area } from 'vant';
Vue.use(Area);

Vue.use(vueLazyLoad, {
  preload: 1.3, //加载高度比。
  loading: require("@/assets/images/noPictrue.png"), //加载时的过渡图片
  error: require("@/assets/images/err.png"), //加载失败的图片
  attempt: 1 //每次加载的张数。
});
Vue.use(animate);
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== "production";
Vue.prototype.$validator = function(rule) {
  return new schema(rule);
};
Vue.prototype.$scroll = $scroll;
Vue.prototype.$dialog = dialog;

const CACHE_KEY = "clear_0.0.1";

if (!cookie.has(CACHE_KEY)) {
  cookie.clearAll();
  cookie.set(CACHE_KEY, 1);
}

//vconsole移动端调试工具
let cookieName = "VCONSOLE";
let query = parseQuery();
let urlSpread = query["spread"];
let vconsole = query[cookieName.toLowerCase()];
let md5Crmeb = "b14d1e9baeced9bb7525ab19ee35f2d2"; //CRMEB MD5 加密开启vconsole模式
let md5UnCrmeb = "3dca2162c4e101b7656793a1af20295c"; //UN_CREMB MD5 加密关闭vconsole模式

if (urlSpread !== undefined) {
  var spread = cookie.get("spread");
  urlSpread = parseInt(urlSpread);
  if (!Number.isNaN(urlSpread) && spread !== urlSpread) {
    cookie.set("spread", urlSpread || 0);
  } else if (spread === 0 || typeof spread !== "number") {
    cookie.set("spread", urlSpread || 0);
  }
}

const _isWechat = isWeixin();

if (vconsole !== undefined) {
  if (vconsole === md5UnCrmeb && cookie.has(cookieName))
    cookie.remove(cookieName);
} else vconsole = cookie.get(cookieName);

if (vconsole !== undefined && vconsole === md5Crmeb) {
  cookie.set(cookieName, md5Crmeb, 3600);
  const module = () => import("vconsole");
  module().then(Module => {
    new Module.default();
  });
}

if (_isWechat) {
  const module = () => import("@/libs/wechat");
  module().then(Module => {
    Module.default().then(() => Module.oAuth());
  });
}


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)



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
  store,
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import {Lazyload} from 'vant'

Vue.use(Router)
Vue.use(Lazyload)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
  ]
})

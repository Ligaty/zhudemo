import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import {Lazyload} from 'vant'
import PinBao from '@/components/pinbao'
import HomePage from "@/components/HomePage";
import Home from "@/views/Home";
import detail from "@/components/detail";
import MenuList from "@/views/MenuList"
import bnavigation from "@/components/bnavigation"
import Involved from "@/views/Involved"
import ShoppingCart from "@/views/ShoppingCart"
import AddressManage from "@/views/AddressManage";
import AddAddress from "@/views/AddAddress";
import PersonalCenter from "@/views/PersonalCenter";


Vue.use(Router)
Vue.use(Lazyload)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/bnavigation',
      name: 'bnavigation',
      component: bnavigation
    },
    {
      path: '/PinBao',
      name: 'PinBao',
      component: PinBao
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/MenuList',
      name: 'MenuList',
      component: MenuList
    },
    {
      path: '/Involved',
      name: 'Involved',
      component: Involved
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/AddressManage',
      name: 'AddressManage',
      component: AddressManage
    },
    {
      path: '/AddAddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
  ]
})

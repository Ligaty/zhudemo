import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {Lazyload} from 'vant'
import PinBao from '@/views/pinbao'
import HomePage from "@/views/HomePage";
import Home from "@/views/Home";
import detail from "@/views/detail";
import MenuList from "@/views/MenuList"
import bnavigation from "@/components/bnavigation"
import Involved from "@/views/Involved"
import ShoppingCart from "@/views/ShoppingCart"
import AddressManage from "@/views/AddressManage";
import AddAddress from "@/views/AddAddress";
import PersonalCenter from "@/views/PersonalCenter";
import MyOrder from "@/views/MyOrder";
import module from "./module";
import Index from "@/views/home/Index";
import Search from "@/views/shop/GoodSearch";
import Category from "@/views/shop/GoodsClass";
import GoodsList from "@/views/shop/GoodsList";
import NotDefined from "@/views/NotDefined";
import $store from "../store";
import toLogin from "@/libs/login";
import Loading from "@/views/Loading";
import muban from "@/components/muban"
import MyGbi from "@/views/MyGbi";
import nReCharge from "@/views/nReCharge";
import ConfirmOrder from "@/views/ConfirmOrder";
import OrderDetail from "@/views/OrderDetail";
import LogisticsInformation from "@/views/LogisticsInformation";
import pindetail from "@/views/pindetail";
import RegisterVIP from "@/views/RegisterVIP";
import AddToCart from "@/views/AddToCart";



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
      path: '/muban',
      name: 'muban',
      component: muban
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
    {
      path: '/MyOrder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/MyGbi',
      name: 'MyGbi',
      component: MyGbi
    },
    {
      path: '/nReCharge',
      name: 'nReCharge',
      component: nReCharge
    },
    {
      path: '/ConfirmOrder',
      name: 'ConfirmOrder',
      component: ConfirmOrder
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/LogisticsInformation',
      name: 'LogisticsInformation',
      component: LogisticsInformation
    },
    {
      path: '/pindetail',
      name: 'pindetail',
      component: pindetail
    },
    {
      path: '/RegisterVIP',
      name: 'RegisterVIP',
      component: RegisterVIP
    },
    {
      path: '/AddToCart',
      name: 'AddToCart',
      component: AddToCart
    },
    {
      path: "/customer/chat/:id/:productId?",
      name: "CustomerService",
      meta: {
        title: "客服聊天",
        keepAlive: false,
        auth: true
      },
      component: () => import("@/views/user/CustomerService.vue")
    },
    {
      path: "/category/:pid?",
      name: "GoodsClass",
      meta: {
        title: "产品分类",
        keepAlive: true,
        footer: true,
        backgroundColor: "#fff"
      },
      component: Category
    },
    {
      path: "/collection",
      name: "GoodsCollection",
      meta: {
        title: "收藏商品",
        keepAlive: false,
        auth: true
      },
      component: () => import("@/views/shop/GoodsCollection.vue")
    },
    {
      path: "/search",
      name: "GoodSearch",
      meta: {
        title: "搜索商品",
        keepAlive: true,
        backgroundColor: "#fff"
      },
      component: Search
    },
    {
      path: "/news_detail/:id",
      name: "NewsDetail",
      meta: {
        title: "新闻详情",
        keepAlive: true,
        backgroundColor: "#fff"
      },
      component: () => import("@/views/shop/news/NewsDetail.vue")
    },
    {
      path: "/news_list",
      name: "NewsList",
      meta: {
        title: "新闻",
        keepAlive: true,
        backgroundColor: "#fff"
      },
      component: () => import("@/views/shop/news/NewsList.vue")
    },
    {
      path: "/evaluate_list/:id",
      name: "EvaluateList",
      meta: {
        title: "商品评分",
        keepAlive: true,
        auth: true
      },
      component: () => import("@/views/shop/EvaluateList.vue")
    },
    {
      path: "/goods_evaluate/:id",
      name: "GoodsEvaluate",
      meta: {
        title: "商品评价",
        keepAlive: true,
        auth: true
      },
      component: () => import("@/views/shop/GoodsEvaluate.vue")
    },
    {
      path: "/promotion",
      name: "GoodsPromotion",
      meta: {
        title: "促销单品",
        keepAlive: false
      },
      component: () => import("@/views/shop/GoodsPromotion.vue")
    },
    {
      path: "/hot_new_goods/:type",
      name: "HotNewGoods",
      meta: {
        title: "热门榜单",
        keepAlive: false
      },
      component: () => import("@/views/shop/HotNewGoods.vue")
    },
    {
      path: "/detail/:id",
      name: "GoodsCon",
      meta: {
        title: "商品详情",
        keepAlive: false
      },
      component: () => import("@/views/shop/GoodsCon.vue")
    },
    {
      path: "/shop/storeList/:gonames?",
      name: "StoreList",
      meta: {
        title: "门店列表",
        keepAlive: false
      },
      component: () => import("@/views/shop/StoreList.vue")
    },
    {
      path: "/cart",
      name: "ShoppingCart",
      meta: {
        title: "购物车",
        keepAlive: true,
        footer: true,
        auth: true
      },
      component: ShoppingCart
    },
    {
      path: "/goods_list",
      name: "GoodsList",
      meta: {
        title: "商品列表",
        keepAlive: true
      },
      component: GoodsList
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        title: "注册",
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/user/Register.vue")
    },
    {
      path: "/change_password",
      name: "ChangePassword",
      meta: {
        title: "修改密码",
        keepAlive: true,
        backgroundColor: "#fff",
        auth: true
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/user/ChangePassword.vue")
    },
    {
      path: "/retrieve_password",
      name: "RetrievePassword",
      meta: {
        title: "找回密码",
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/user/RetrievePassword.vue")
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登录",
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/user/Login.vue")
    },
    ...module,
    {
      path: "/auth/:url",
      name: "Loading",
      meta: {
        title: " 加载中",
        keepAlive: true
      },
      component: Loading
    },
    {
      path: "*",
      name: "NotDefined",
      meta: {
        title: "页面找不到",
        keepAlive: true,
        home: false,
        backgroundColor: "#F4F6FB"
      },
      component: NotDefined
    }
  ]
})

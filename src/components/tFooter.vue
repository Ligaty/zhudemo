<template>
  <!--底部导航栏-->
  <van-tabbar v-model="active">
    <router-link :to="home">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    </router-link>
    <van-tabbar-item name="apps-o" icon="apps-o">我参与的</van-tabbar-item>
    <router-link :to="cart">
      <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o">购物车</van-tabbar-item>
    </router-link>
    <van-tabbar-item name="user-0" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {}
</script>

<style>

</style>

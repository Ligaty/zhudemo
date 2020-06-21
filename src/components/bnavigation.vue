<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="apps-o" icon="apps-o">我参与的</van-tabbar-item>
    <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item name="user-0" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
      name:'bnavigation',
      data(){
        return{
          active:'0',
        }
      },
      methods:{
        onClickLeft(){
          window.history.back(-1);
        },
        onClickRight(){
          alert("更多")
        },
      }
    }
</script>

<style>

</style>
